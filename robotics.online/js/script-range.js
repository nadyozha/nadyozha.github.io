
var tooltipSlider = document.getElementById('slider-tooltips');

noUiSlider.create(tooltipSlider, {
    start: 250,
    connect: [true, false],
    tooltips: [true],
    step: 1,
    range: {
        'min': 0,
        'max': 500
    },
    format: wNumb({
      decimals: 0,
    })

});


