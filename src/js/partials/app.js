//Some JS
$(document).ready(function() {
    var carousel = $(".carousel");
    var WIN = $(window);
    var breakpoint = 1200;
    var screenWidth = WIN.outerWidth();
    var isSlick = false;
    var slickConfig = {
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<div class="arrow arrow--left"></div>',
      nextArrow: '<div class="arrow arrow--right"></div>'
    };
    if (screenWidth > 1200) {
      carousel.slick(slickConfig);
      isSlick = true;
    }
  
    WIN.resize(function() {
      var screenWidth = WIN.outerWidth();
      if (screenWidth < breakpoint) {
        isSlick && carousel.slick("destroy");
        isSlick = false;
      } else {
        !isSlick && carousel.slick(slickConfig);
        isSlick = true;
      }
    });
  });