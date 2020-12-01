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





  var ctx = document.getElementById('myChart').getContext('2d');
  var gradient2 = ctx.createLinearGradient(0, 0, 0, 280);
    
      gradient2.addColorStop(0, 'rgba(7, 255, 255, 0.5)');
      gradient2.addColorStop(1, 'rgba(24, 54, 153, 0.5)');

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['0', '25', '50', '75', '100', '125', '150', '175', '200', '225', '250'], 
          datasets: [{
              label: '1',
              backgroundColor: gradient2,
              borderColor: 'transparent',
              data: [80, 94, 85, 92, 100, 94, 82, 85, 88, 60, 0]
          }]
      },

      // Configuration options go here
      options: {
        layout: {
          padding: {
            left: -10,
            right: -10,
            top: 0,
            bottom: -10
          }
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }

          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            },
          }]
        }
      },

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
        560:{
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


var connectSlider = document.getElementById('slider-connect');
noUiSlider.create(connectSlider, {
  start: 40,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});






$('#checkbox_1').on('change', function() {
	$('#name-visible').toggleClass('name-hidden');
});

