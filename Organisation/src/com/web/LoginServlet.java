package com.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.Impl.GetLoginDetails;

@WebServlet(name="login" , urlPatterns = "/login")
public class LoginServlet extends HttpServlet {


	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		
		System.out.println("Username = "+username );
		System.out.println("password = "+password );
		
		GetLoginDetails loginDetails = new GetLoginDetails();
		Boolean isPresent = loginDetails.isPresent(username, password);
		
		if(isPresent) {
			
		}else {
			
		}
		
	}

	
	
}
