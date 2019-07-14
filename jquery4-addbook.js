$(document).ready(function(){

	$("#btn").mouseover( function() {
		$(this).css("background-color", "#00cc00");
		$(this).css("color", "white");
	} );

	$("#btn").mouseout( function() {
		$(this).css("background-color", "#ccffcc");
		$(this).css("color", "black");
	} );

	$("#link").mouseover( function() {
		$(this).css("color", "#00cc00");
	} );

	$("#link").mouseout( function() {
		$(this).css("color", "aqua");
	} );

});