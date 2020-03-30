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


$('#nav_21').click(function(){
$('#nav_21').addClass('active');
$('#nav_22').removeClass('active');
$('#nav_23').removeClass('active');
$('#nav_24').removeClass('active');
$('#nav_25').removeClass('active');
$('#nav_26').removeClass('active');
});

$('#nav_22').click(function(){
$('#nav_22').addClass('active');
$('#nav_21').removeClass('active');
$('#nav_23').removeClass('active');
$('#nav_24').removeClass('active');
$('#nav_25').removeClass('active');
$('#nav_26').removeClass('active');
});

$('#nav_23').click(function(){
$('#nav_23').addClass('active');
$('#nav_21').removeClass('active');
$('#nav_22').removeClass('active');
$('#nav_24').removeClass('active');
$('#nav_25').removeClass('active');
$('#nav_26').removeClass('active');
});

$('#nav_24').click(function(){
$('#nav_24').addClass('active');
$('#nav_21').removeClass('active');
$('#nav_23').removeClass('active');
$('#nav_22').removeClass('active');
$('#nav_25').removeClass('active');
$('#nav_26').removeClass('active');
});

$('#nav_25').click(function(){
$('#nav_25').addClass('active');
$('#nav_21').removeClass('active');
$('#nav_23').removeClass('active');
$('#nav_24').removeClass('active');
$('#nav_22').removeClass('active');
$('#nav_26').removeClass('active');
});

$('#nav_26').click(function(){
$('#nav_26').addClass('active');
$('#nav_21').removeClass('active');
$('#nav_23').removeClass('active');
$('#nav_24').removeClass('active');
$('#nav_25').removeClass('active');
$('#nav_22').removeClass('active');
});

$('#nav_31').click(function(){
$('#nav_31').addClass('border-red');
$('#nav_32').removeClass('border-red');
});

$('#nav_32').click(function(){
$('#nav_32').addClass('border-red');
$('#nav_31').removeClass('border-red');
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,

            dots:true,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})























