$(function() {

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

  $('.stylish-select').stylishSelect();

  $('.stylish-select').on('change', function() {
	  $('[href="' + this.value + '"]').trigger('click');
	});

  $('#language').click(function() {
		$('.categories').toggleClass('categories-none');
	});

  var sliderAmount = document.querySelectorAll('.slider-amount');
  sliderAmount.forEach(function(slider) {
    noUiSlider.create(slider, {
      start: 4000,
      step: 1,
      connect: [true, false],
      tooltips: true,
      range: {
        'min': 0,
        'max': 10000
      },
    });
  });


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
        574:{
            items:2,
            stagePadding: 15
        },
        767:{
            items:3,
            stagePadding: 25
        },
        1440:{
            items:4
        }
      }
    })

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
        574:{
            items:2,
            stagePadding: 55,
            dots:true
        },
        1100:{
            items:3
        }
      }
    })

});






var $slider = $("#slider");
var $fill = $(".bar .fill");
function setBar() {
	$fill.css("width", $slider.val() + "%");
}
$slider.on("input", setBar);
setBar();


$('#checkbox_1').on('change', function() {
	$('#name-visible').toggleClass('name-hidden');
});

