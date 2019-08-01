package com.dao;

import com.bean.BookingDetails;

public interface OrgInterface {
	
	public boolean isPresent(String username , String password);
	
	public void bookingDetails(BookingDetails details);
	
}
