/*
What's my screen size ?
author:jeremy josey
*/

$(document).ready(function(){
	$('body').append('<div class="wmss"><p>Width: <span class="screensizewidth"></span></p></div>');
	/*Define Styles */
	$('.wmss').css({
    "z-index": "9000",
    "position": "fixed",
    "top": "5%",
    "right": "5%",
    "background": "rgb(0, 0, 0)",
    "background": "rgba(0, 0, 0, 0.6)",
    "padding": "20px",
    "border-radius": "12px",
    "color": "#FFF"

  	});


    //print to div

    $('.screensizewidth').text($(window).width());

    $(window).resize(function() {
      // This will execute whenever the window is resized

        $(window).height(); // New height
        $(window).width(); // New width

        $('.screensizewidth').text($(window).width());

    });

	
});