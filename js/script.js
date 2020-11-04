new WOW().init();


$('#btn-rose').click(function(){
$('#btn-rose').addClass('actives-rose');
$('#btn-yellow').removeClass('actives-yellow');
$('#btn-green').removeClass('actives-green');
$('#thert-color-bg').addClass('thert-rose');
$('#thert-color-bg').removeClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-green');
});


$('#btn-yellow').click(function(){
$('#btn-yellow').addClass('actives-yellow');
$('#btn-rose').removeClass('actives-rose');
$('#btn-green').removeClass('actives-green');
$('#thert-color-bg').addClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-rose');
$('#thert-color-bg').removeClass('thert-green');
});

$('#btn-green').click(function(){
$('#btn-green').addClass('actives-green');
$('#btn-yellow').removeClass('actives-yellow');
$('#btn-rose').removeClass('actives-rose');
$('#thert-color-bg').addClass('thert-green');
$('#thert-color-bg').removeClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-rose');
});

$('.btn-7').click(function(){
$('.btn-7').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-6').removeClass('active');
});

$('.btn-6').click(function(){
$('.btn-6').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-7').removeClass('active');
});

$('.btn-5').click(function(){
$('.btn-5').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-7').removeClass('active');
$('.btn-6').removeClass('active');
});

$('.btn-4').click(function(){
$('.btn-4').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-7').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-6').removeClass('active');
});

$('.btn-3').click(function(){
$('.btn-3').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-7').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-6').removeClass('active');
});

$('.btn-2').click(function(){
$('.btn-2').addClass('active');
$('.btn-1').removeClass('active');
$('.btn-7').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-6').removeClass('active');
});

$('.btn-1').click(function(){
$('.btn-1').addClass('active');
$('.btn-7').removeClass('active');
$('.btn-2').removeClass('active');
$('.btn-3').removeClass('active');
$('.btn-4').removeClass('active');
$('.btn-5').removeClass('active');
$('.btn-6').removeClass('active');
});


$('.team-img').click(function(){
$(this).removeClass('active-img');
$('.wrap-video').addClass('before-none');
});




$('.video-wrap').click(function(){
$(this).addClass('before-none');
});

$('.max-dexter').click(function(){
$(this).addClass('max-dexter-none');
});



$('#checkbox_1').on('change', function() {
	if ( $(this).is(':checked') ) {
		$('#max-visible').toggleClass('max-hidden');
	}
});

