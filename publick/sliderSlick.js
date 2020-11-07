$(document).ready(function () {
   $('.sliderSlick').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      swipe: true,
      centerMode: true,
      variableWidth: true,
      rows: 1,
      slidesPerRow: 1,
      mobileFirst: false,
     /*  responsive: [{
            breakpoint: 1100,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true

            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ] */
   });
});