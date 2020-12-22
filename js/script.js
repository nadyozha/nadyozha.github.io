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
  //language block hidden in dashboard
  $('#language').click(function() {
  	$('.categories').toggleClass('categories-none');
  });
  //cart active index-html
  $('#cart-plan-2-wrap').click(function() {
    //$('.coins-svg').addClass('coins-none');
    //$('.spanp-with-our span').toggleClass('dn-span');
    //$('.spanp-with-our h1').addClass('db-span');
  });
  $('#cart-plan-1-wrap').click(function() {
    //$('.coins-svg').addClass('coins-none');
    //$('.spanp-with-our h1').addClass('db-span');
    //$('.spanp-with-our span').removeClass('dn-span');
    //$('.logo-small-mobil').addClass('db-span');
  });
  //checkbox registration page
  $('#checkbox_1').on('change', function() {
    $('#name-visible').toggleClass('name-hidden');
  });
  //click to copy svg
  $(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
    // copy coupone code to clipboard
    $('.copy-btn').on("click", function() {
      var $brat = $(this).siblings(".copy-text");
      copyToClipboard($brat);
    });
  });

  
  $('.cancel-active-tab').click(function() {
    $('.tab-link-btn').removeClass('active');
  });
  $('.tab-link-btn').click(function() {
    $('.cancel-active-tab').removeClass('active');
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".categories"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.categories').addClass('categories-none');
        $('#language').click(function() {
          $('.categories').toggleClass('categories-none');
        });
    }
  });

  //actibe status buttons in settings page
  $('.active-status h5').click(function() {
    $(this).addClass('active-color');
    $(this).siblings("h5").removeClass('active-color');
  });

  //log out dropdown
  
  $('.log-out').click(function() {
    $(this).removeClass('log-out-visibl');
  });

  $(document).mouseup(function (r){ // событие клика по веб-документу
    var div = $(".log-out"); // тут указываем ID элемента
    if (!div.is(r.target) // если клик был не по нашему блоку
        && div.has(r.target).length === 0) { // и не по его дочерним элементам
        $(".log-out").removeClass('log-out-visibl');
        $('.img-account-user').click(function() {
          $('.log-out').toggleClass('log-out-visibl');
        });
    }
  });

});













