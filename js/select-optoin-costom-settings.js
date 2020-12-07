 $(document).ready(function(){
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
});