package com.dao.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.bean.BookingDetails;
import com.dao.OrgInterface;
import com.db.DBConnection;

public class GetLoginDetails implements OrgInterface {

	public boolean isPresent(String username, String password) {
		
		String sql = "select * from login";
		Connection connection = null;
		PreparedStatement prepareStatement = null;
		ResultSet resultSet = null;
		
		System.out.println("username and password recieved in GetLoginDetails ");
		
		List<String> usernameList = new ArrayList<>();;
		List<String> passwordList  = new ArrayList<>();
		
		try {
			
			connection = DBConnection.getConnection();
			prepareStatement = connection.prepareStatement(sql);
			resultSet = prepareStatement.executeQuery();
			
			while(resultSet.next()){
			
				usernameList.add(resultSet.getString("username"));
				passwordList.add(resultSet.getString("password"));
			
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}finally {
			DBConnection.close(connection, prepareStatement, resultSet);
		}
		
		boolean isPresented = false ;
		
		for(int i=0; i<usernameList.size(); i++) {
			
			if(username.equals(usernameList.get(i)) ){
				
						if(password.equals(passwordList.get(i))) {
							isPresented = true ;
						}
			
			}
		
		}
		
		return isPresented;
		
	}

	@Override
	public void bookingDetails(BookingDetails details) {
			
		System.out.println(" Details recieved in InsertBookingDetails");
		
		String sql = "insert into bookDetails(movieName,theaterName,movieShow,movieTiming,seatNumber,ticketPrice)"
								+ " values(?,?,?,?,?,?)";     
		
		Connection connection = null;
		PreparedStatement prepareStatement = null;
		
		try{
			
		connection  = DBConnection.getConnection();
		connection.setAutoCommit(false);
			
		System.out.println(details.getMovieName());
		
		prepareStatement = connection.prepareStatement(sql);
		
		prepareStatement.setString(1, details.getMovieName());			
		prepareStatement.setString(2, details.getTheaterName());
		prepareStatement.setString(3, details.getMovieShow());
		prepareStatement.setString(4, details.getMovieTiming());
		prepareStatement.setString(5, details.getSeatNumber());
		prepareStatement.setString(6, details.getTicketPrice());
		
		prepareStatement.executeUpdate();
		
		System.out.println("Values inserted in booking details table");
		
		connection.commit();
		
		}
		catch(Exception e){
			
			try{
				connection.rollback();
			}
		
			catch (Exception e1) {
				e1.printStackTrace();
			}
				e.printStackTrace();
		}
		
		finally {
			DBConnection.close(connection, prepareStatement, null);
		}
		
		
	}

	/*
	 * @Override public void bookingDetails(BookingDetails details) {
	 * 
	 * 
	 * }
	 */
	
	
	
}
