$(document).ready(function() {

	function numerValue(str) {
		return Number(str.replace(/[^0-9]/gim,''));
	};

	var sliderAmount = document.getElementById('slider-amount'),
      inputAmount = document.getElementById('input-amount'),
      inputAmountMinus = document.getElementById('input-amount-minus'),
      inputAmountPlus = document.getElementById('input-amount-plus');
  noUiSlider.create(sliderAmount, {
    start: 4000,
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
      'min': 0,
      'max': 7000
    },
    format: wNumb({
      postfix: ' €',
      decimals: 0,
    })
  });
	sliderAmount.noUiSlider.on('update', function(values, handle) {
    inputAmount.innerHTML = values[handle];
	});
	inputAmountMinus.addEventListener('click', function() {
    sliderAmount.noUiSlider.set( numerValue(sliderAmount.noUiSlider.get()) - 1 );
	});
	inputAmountPlus.addEventListener('click', function() {
		sliderAmount.noUiSlider.set( numerValue(sliderAmount.noUiSlider.get()) + 1 );
	});

	var sliderDuration = document.getElementById('slider-duration'),
      inputDuration = document.getElementById('input-duration'),
      inputDurationMinus = document.getElementById('input-duration-minus'),
      inputDurationPlus = document.getElementById('input-duration-plus');
  noUiSlider.create(sliderDuration, {
    start: 45,
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
      'min': 0,
      'max': 120
    },
    format: wNumb({
      postfix: ' days',
      decimals: 0,
    })
  });
	sliderDuration.noUiSlider.on('update', function(values, handle) {
    inputDuration.innerHTML = values[handle];
	});
	inputDurationMinus.addEventListener('click', function() {
    sliderDuration.noUiSlider.set( numerValue(sliderDuration.noUiSlider.get()) - 1 );
	});
	inputDurationPlus.addEventListener('click', function() {
		sliderDuration.noUiSlider.set( numerValue(sliderDuration.noUiSlider.get()) + 1 );
	});

	
  $(".noUi-tooltip").wrap(function() {
    return "<div class='noUi-tooltip-wrap'></div>";
  });


});
