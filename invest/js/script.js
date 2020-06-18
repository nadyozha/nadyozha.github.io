document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done')
        }
    }, 1000);
}


$(function() {

	$('.navbar-toggler').click(function() {
		$('.nav-contente').toggleClass('nav-contente-active');
	});
	
	$('#sandwich').click(function() {
		$('body').toggleClass('menubar-in');

	});

	$('.menu-close').click(function() {
		$('.menubar-in').removeClass('menubar-in');

	});

	Waves.attach('.btn-orange', ['waves-button', 'waves-float']);
	Waves.attach('.btn-white', ['waves-button', 'waves-float']);
	Waves.init()
});


    $owlMain = $('.owl-main');
    function initializeMain() {
      if (window.matchMedia('(max-width: 1199.98px)').matches) {
        $owlMain.addClass('owl-carousel');
        $owlMain.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                },
                588: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                //991: {
                    //items: 3,
                //},
            },

            dots: false,
            smartSpeed: 1000,
            stagePadding: 30,

        });

        } else {
            $owlMain.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
            $owlMain.find(".owl-stage-outer").children().unwrap();
        }
    }
$(window).resize(initializeMain);
initializeMain();

$owlBlog = $('.owl-blog');
    function initializeBlog() {
      if (window.matchMedia('(max-width: 1199.98px)').matches) {
        $owlBlog.addClass('owl-carousel');
        $owlBlog.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                },
                588: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
            },

            dots: false,
            smartSpeed: 1000,
            stagePadding: 30,

        });
        
        } else {
            $owlBlog.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
            $owlBlog.find(".owl-stage-outer").children().unwrap();
        }
    }
$(window).resize(initializeBlog);
initializeBlog();
