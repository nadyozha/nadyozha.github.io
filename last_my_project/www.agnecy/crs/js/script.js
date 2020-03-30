$(document).ready(function() {
 $('.menu_trigger').click(function() {
  $('nav ul').slideToggle("500");
});
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});
});


$('nav ul li a').mouseenter(function(){
$('nav ul li a').removeClass('active');
});

$('nav ul li a').mouseleave(function(){
$('#active_1').addClass('active');
});


