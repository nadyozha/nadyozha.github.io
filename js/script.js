$(document).ready(function(){
  //header menu
  $('#sandwich').click(function() {
  	$('body').toggleClass('menubar-in');
  	$('.logo').toggleClass('hidden');
  	$('.user').toggleClass('hidden');
    $('header').toggleClass('active-header');
  });
  $('.menu-close').click(function() {
  	$('.menubar-in').removeClass('menubar-in');
  	$('.logo').toggleClass('hidden');
  	$('.user').toggleClass('hidden');
    $('header').toggleClass('active-header');
  });
  //option-select-styles-plagin
  $('.stylish-select').stylishSelect();
  $('.stylish-select').on('change', function() {
    $('[href="' + this.value + '"]').trigger('click');
  });
  $('.stylish-select-selected').click(function() {
    $('.stylish-select-selected').toggleClass('rotate-icon');
  });
  $('.stylish-select-list li').click(function() {
    $('.stylish-select-selected').toggleClass('rotate-icon');
  });
  //language block hidden in dashboard
  $('#language').click(function() {
  	$('.categories').toggleClass('categories-none');
  });
  //cart active index-html
  $('#cart-plan-2-wrap').click(function() {
    $('.coins-svg').addClass('coins-none');
    $('.spanp-with-our span').toggleClass('dn-span');
    $('.spanp-with-our h1').addClass('db-span');
  });
  $('#cart-plan-1-wrap').click(function() {
    $('.coins-svg').addClass('coins-none');
    $('.spanp-with-our h1').addClass('db-span');
    $('.spanp-with-our span').removeClass('dn-span');
    $('.logo-small-mobil').addClass('db-span');
  });
  //checkbox registration page
  $('#checkbox_1').on('change', function() {
    $('#name-visible').toggleClass('name-hidden');
  });
});










