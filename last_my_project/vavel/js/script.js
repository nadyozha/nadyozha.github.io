$('#btn-open').click(function(){
	$('.btn-open, .navbar-collapse').toggleClass('active');
});

$('.nav-link_1').click(function(){
	$('.btn-open').toggleClass('active');
	$('.navbar-collapse').toggleClass('active, show');

});

$('.dropdown-item').click(function(){
	$('.btn-open').toggleClass('active');
	$('.navbar-collapse').toggleClass('active, show');

});

new WOW().init();

