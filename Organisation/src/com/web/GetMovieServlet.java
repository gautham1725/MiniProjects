package com.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bean.MovieDetails;
import com.dao.Impl.Implementation;

@WebServlet(name="getmovies" , urlPatterns = "/show")
public class GetMovieServlet extends HttpServlet{
	
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Implementation impl = new Implementation();
		List<MovieDetails> movieList = impl.showMovies();
		
		req.setAttribute( "movieList" , movieList );
		RequestDispatcher dispatcher = req.getRequestDispatcher("/showMovie.jsp");
		dispatcher.forward(req, resp);
		
	}
	
}
