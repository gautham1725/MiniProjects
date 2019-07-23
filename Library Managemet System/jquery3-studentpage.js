$( function() {
	
	$("a").mouseover( function() {
		$(this).css("background-color", "#00cc00");
	} );

	$("a").mouseout( function() {
		$(this).css("background-color", "#80ffaa");
	} );

	$(".button1").mouseover( function() {
		$(this).css("background-color", "#ff0000");
	} );

	$(".button1").mouseout( function() {
		$(this).css("background-color", "#ff8080");
	} );

});
