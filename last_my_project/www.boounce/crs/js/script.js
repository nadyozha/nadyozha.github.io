new WOW().init();

$('.grid').masonry({
  itemSelector: '.grid-item',
});

$('#click-btn').click(function(){
$('#del').toggleClass('delate');
});