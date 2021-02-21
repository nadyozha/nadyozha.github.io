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

$('.btn-faq').click(function(){
	$('.btn-faq').removeClass('active');
	$(this).addClass('active');
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
	$('#max-visible').toggleClass('max-hidden');
	$('#your-friend').toggleClass('max-hidden');
	$('.bonus').toggleClass('max-hidden');
	$('.gift').toggleClass('max-hidden');
});


$('.eye-icon').click(function(){
  var input = $(".password");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
    $('.eye-icon').addClass('eye-icon-active');
  } else {
    input.attr("type", "password");
    $('.eye-icon').removeClass('eye-icon-active');
  }
});

$('.left-block-btn').click(function(){
  $(this).addClass('active-mobile');
  $(this).siblings().removeClass('active-mobile');
});

$('.cart-ask .card-header').click(function(){
  $('.cart-ask').removeClass('active-ask');
  $(this).parent('.cart-ask').toggleClass('active-ask');
});


