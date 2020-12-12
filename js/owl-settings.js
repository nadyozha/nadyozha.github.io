$(document).ready(function(){
//owl-carousel-owl-top-cart-dashboard-home&live payments
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
  //owl-carousel--cart-progressbar-dashboard-my investments
  $('.owl-progress-bar').owlCarousel({
    stagePadding: 0,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    //autoplay:true,
    //autoplayTimeout:3000,
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
          items:3,
          stagePadding: 30
      }
    }
  })
  //owl-carousel--cart-news-dashboard-publications
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
    
    });

  var slider = $('.owl-carousel');
  $('.nextItem').click(function () {
      slider.trigger('next.owl.carousel');
  });

});