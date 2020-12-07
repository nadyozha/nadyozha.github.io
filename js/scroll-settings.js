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
});