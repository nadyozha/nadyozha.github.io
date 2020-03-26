document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done')
		}
	}, 1000);
}









$('#btn-open').click(function(){
	$('.btn-open, .collapse-content').toggleClass('active');
	$('body').toggleClass('lock');
});


$('.nav-link').click(function(){
	$('.btn-open, .collapse-content').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.btn-collapse').mouseenter(function(){
	$('.btn-collapse').removeClass('active');
});


$('[data-toggle=popover]').popover();

$('.popover-dismiss').popover({
  trigger: 'focus'
})

new WOW().init();


$('.btn-collapse').click(function(){
	$(this).toggleClass('active');
});




var scroll = new SmoothScroll('a[href*="#"]', {
	speed:800
});






$('#Light').click(function(){
	$(this).toggleClass('active');
	$('#Medium').removeClass('active');
	$('#Full').removeClass('active');
});

$('#Medium').click(function(){
	$(this).toggleClass('active');
	$('#Light').removeClass('active');
	$('#Full').removeClass('active');
});

$('#Full').click(function(){
	$(this).toggleClass('active');
	$('#Medium').removeClass('active');
	$('#Light').removeClass('active');
});








$('.all_project').click(function(){
	$('.exteryier, .interyier, .all_interyier').removeClass('active');
});

$('.exteryier').click(function(){
	$('.all_project, .interyier, .all_interyier').removeClass('active');
});

$('.interyier').click(function(){
	$('.exteryier, .all_project, .all_interyier').removeClass('active');
});

$('.all_interyier').click(function(){
	$('.exteryier, .interyier, all_project').removeClass('active');
});





$('.all_project').click(function(){
	$('#exteryier').removeClass('show');
	$('#interyier').removeClass('show');
	$('#all_interyier').removeClass('show');
});

$('.exteryier').click(function(){
	$('#all_project').removeClass('show');
	$('#interyier').removeClass('show');
	$('#all_interyier').removeClass('show');
});

$('.interyier').click(function(){
	$('#all_project').removeClass('show');
	$('#exteryier').removeClass('show');
	$('#all_interyier').removeClass('show');
});

$('.all_interyier').click(function(){
	$('#all_project').removeClass('show');
	$('#exteryier').removeClass('show');
	$('#interyier').removeClass('show');
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,

            dots:true,
        },
        
        414:{
            items:2
        },
        768:{
            items:5
        },
        1000:{
            items:7
        }
    }
})