package com.dao.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import com.bean.BookingDetails;
import com.dao.OrgInterface;
import com.db.DBConnection;

public abstract class InsertBookingDetails implements OrgInterface {
	
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

	
	
}
