
var tooltipSlider = document.getElementById('slider-tooltips');
var tooltipSlider2 = document.getElementById('slider-tooltips-2');

noUiSlider.create(tooltipSlider, {
    start: [3247],
    connect: 'lower',
    tooltips: [true],
    range: {
        'min': 0,
        'max': 10000
    }
});

noUiSlider.create(tooltipSlider2, {
    start: [3247],
    connect: 'lower',
    tooltips: [true],
    range: {
        'min': 0,
        'max': 10000
    }
});




