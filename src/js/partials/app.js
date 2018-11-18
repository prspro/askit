//Some JS
$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.arrow.arrow--left'),
        nextArrow: $('.arrow.arrow--right'),
    });
});