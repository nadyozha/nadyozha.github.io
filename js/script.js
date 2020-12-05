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
  //scroll header opacity
  $('body').scroll(function(){
   var height = $('body').scrollTop();
   if(height > 36){
      $('header').addClass('header-scroll');
    } else{
    /*Если меньше 36px удаляем класс для header*/
      $('header').removeClass('header-scroll');
    }
  });
  //подключение плагина для стилизации scroll
  $("body").mCustomScrollbar({
    callbacks:{
      onScroll:function(){
        myCustomFn(this);
      }
    }
  });
  function myCustomFn(el){
    if(el.mcs.top < -36){
      $('header').addClass('header-scroll');
    } else{
      $('header').removeClass('header-scroll');
    }
  };
  $(".h-700px, .h-295, .h-768, .full-h").mCustomScrollbar({});
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
  



  


 
    

  



  //language block hidden in dashboard
  $('#language').click(function() {
  	$('.categories').toggleClass('categories-none');
  });
  //cart active index-html
  $('#cart-plan-2').click(function() {
    $('#cart-plan-1-wrap').removeClass('active');
    $('#cart-plan-2-wrap').addClass('active');
    $('.coins-svg').addClass('coins-none');
    $('.spanp-with-our span').toggleClass('dn-span');
    $('.spanp-with-our h1').addClass('db-span');
  });
  $('#cart-plan-1').click(function() {
    $('#cart-plan-2-wrap').removeClass('active');
    $('#cart-plan-1-wrap').addClass('active');
    $('.coins-svg').addClass('coins-none');
    $('.spanp-with-our h1').addClass('db-span');
    $('.spanp-with-our span').removeClass('dn-span');
    $('.logo-mobil').addClass('db-span');
  });
  //checkbox registration page
  $('#checkbox_1').on('change', function() {
    $('#name-visible').toggleClass('name-hidden');
  });

  //owl-carousel-owl-top-cart-dashboard-home&live payments
  $('.owl-top').owlCarousel({
    stagePadding: 0,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
      319:{
          items:1,
          stagePadding: 40
      },
      374:{
          items:1,
          stagePadding: 55
      },
      560:{
          items:2,
          stagePadding: 25
      },
      767:{
          items:3,
          stagePadding: 25
      },
      1000:{
          items:4,
          stagePadding: 0
      }
    }
  })
  //owl-carousel--cart-progressbar-dashboard-my investments
  $('.owl-progress-bar').owlCarousel({
    stagePadding: 0,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
      300:{
          items:1,
          stagePadding: 20
      },
      374:{
          items:1,
          stagePadding: 25
      },
      767:{
          items:2,
          stagePadding: 20
      },
      860:{
          items:2,
          stagePadding: 60
      },
      991:{
          items:2,
          stagePadding: 20
      },
      1120:{
          items:2,
          stagePadding: 70
      },
      1440:{
          items:3
      }
    }
  })
  //owl-carousel--cart-news-dashboard-publications
  $('.owl-news').owlCarousel({
    stagePadding: 0,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        300:{
          items:1,
          stagePadding: 20,
          dots:true
        },
        374:{
          items:1,
          stagePadding: 20,
          dots:true
        },
        560:{
          items:2,
          stagePadding: 55,
          dots:true
        },
        1100:{
          items:3
        }
      }
    
    });

  var scene = document.getElementById('stars');
  var parallaxInstance = new Parallax(stars, {
    relativeInput: true
  });

});










