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

	








  function numerValue1(str) {
    return Number(str.replace(/[^0-9]/gim,''));
  };

  var sliderAmount2 = document.getElementById('slider-amount1'),
      inputAmount2 = document.getElementById('input-amount1'),
      inputAmountMinus2 = document.getElementById('input-amount-minus1'),
      inputAmountPlus2 = document.getElementById('input-amount-plus1');
  noUiSlider.create(sliderAmount2, {
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
  
  sliderAmount2.noUiSlider.on('update', function(values, handle) {
    inputAmount2.innerHTML = values[handle];
  });
  inputAmountMinus2.addEventListener('click', function() {
    sliderAmount2.noUiSlider.set( numerValue1(sliderAmount2.noUiSlider.get()) - 1 );
  });
  inputAmountPlus2.addEventListener('click', function() {
    sliderAmount2.noUiSlider.set( numerValue1(sliderAmount2.noUiSlider.get()) + 1 );
  });

  var sliderDuration2 = document.getElementById('slider-duration1'),
      inputDuration2 = document.getElementById('input-duration1'),
      inputDurationMinus2 = document.getElementById('input-duration-minus1'),
      inputDurationPlus2 = document.getElementById('input-duration-plus1');
  noUiSlider.create(sliderDuration2, {
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
  sliderDuration2.noUiSlider.on('update', function(values, handle) {
    inputDuration2.innerHTML = values[handle];
  });
  inputDurationMinus2.addEventListener('click', function() {
    sliderDuration2.noUiSlider.set( numerValue1(sliderDuration2.noUiSlider.get()) - 1 );
  });
  inputDurationPlus2.addEventListener('click', function() {
    sliderDuration2.noUiSlider.set( numerValue1(sliderDuration2.noUiSlider.get()) + 1 );
  });

  $(".noUi-tooltip").wrap(function() {
    return "<div class='noUi-tooltip-wrap'></div>";
  });
});





