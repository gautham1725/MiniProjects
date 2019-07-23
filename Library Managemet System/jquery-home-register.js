$( function() {

	console.log("inside js");

	$(".button").mouseover( function() {
		$(".button").css("background-color", "#00cc00");
	} );

	$(".button").mouseout( function() {
		$(".button").css("background-color", "#f2f2f2");
	} );
	
	$("input").focus( function() {
		$(this).css("background-color", "#00ff00");
	} );

	$("input").blur( function() {
		$(this).css("background-color", "white");
	} );
	
	$("a").mouseover( function() {
		$(this).css("color", "#00cc00");
	} );

	$("a").mouseout( function() {
		$(this).css("color", "#003366");
	} );

} );