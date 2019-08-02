<%@ page language="java" import= " com.bean.* , java.util.* " contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Movie List</title>
</head>
<body>

<table border ="5" cellspacing="5" cellpadding="5">

<%
List<MovieDetails> movieList = ( List<MovieDetails> ) request.getAttribute("movieList");

out.println("<h1><b>The employees above the given age are : </b></h1>"+"<br><br>");
out.println("<tr> <th> <h2> MovieName </h2> </th> <th> <h2> Actor </h2> </th> <th> <h2> Languages </h2> </th> <th> <h2> Ratings </h2> </th> <th> <h2> Price </h2> </th> </tr> <h2>");


for(MovieDetails movies : movieList){
	out.println("<tr><td>"+movies.getMoviename()+"</td>"+
					"<td>"+movies.getActor()+"</td>"+
					"<td>"+movies.getLanguages()+"</td>"+
					"<td>"+movies.getRating()+"</td>"+
					"<td>"+movies.getPrice()+"</td></tr>");
}

%>
</table>

</body>
</html>