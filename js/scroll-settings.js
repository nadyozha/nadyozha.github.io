  $(document).ready(function(){
    ////подключение плагина для стилизации scroll
    Scrollbar.initAll(); 
    const scrollbar = Scrollbar.init(document.querySelector('.my-scrollbar'));
    function listener() {
      if(scrollbar.scrollTop > 36){
        $('header').addClass('header-scroll');
      } else{
        $('header').removeClass('header-scroll');
      }
    };
    scrollbar.addListener(listener);

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
});