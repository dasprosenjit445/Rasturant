$(".testimonial").owlCarousel({
    items: 2,
    autoplay: false,
    loop: true,
    margin: 60,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.image').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        }
    })
	
      new WOW().init();

	  var wow = new WOW(
		{
		  boxClass:     'wow',      
		  animateClass: 'animated',
		  offset:       0,         
		  mobile:       true,      
		  live:         true,      
		  callback:     function(box) {
		  },
		  scrollContainer: null,    
		  resetAnimation: true,  
		}
	  );
	  

   /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }
    });

    $.scrollUp({
        scrollText: '<i class="fas fa-arrow-alt-circle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 1000,
        animation: 'fade'
    });
