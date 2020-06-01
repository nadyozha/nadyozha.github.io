$(function() {

	$('#sandwich').click(function() {
		$('body').toggleClass('menubar-in');
	});

  $('.stylish-select').stylishSelect();

  $('.stylish-select').on('change', function() {
	  $('[href="' + this.value + '"]').trigger('click');
	});

});