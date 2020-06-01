(function ($) {
    "use strict";

    // mobile  menu

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });
    


    // extra information
    $(".info-bar").on('click',function(){
        $(".extra-info").addClass("info-open");
    });
    $('.close-icon').on('click',function(){
        $('.extra-info').removeClass('info-open');
    })
// slider active
    $('.slider_active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

 // blog - active
 $('.blog-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});   
 // testimonial - active
 $('.testimonial-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});   

// brand - active
$('.brand-active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}); 

// testimonial 2
 $('.testimonial-item-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-nave'
  });
  $('.testimonial-nave').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-item-active',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
  });
              



    // isotop section
      var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });

    $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
    });

    $('.portfolio-menu button').on('click',function(){
        $(".portfolio-menu button").removeClass('active');
        $(this).addClass('active');     
    });

    // magnific popup
    $('.portfolio-icon').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            // options for gallery
            enabled: true
          }
      });

          // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // nice select

   $('select').niceSelect();

})(jQuery);	  