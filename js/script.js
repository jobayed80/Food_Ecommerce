


$(function(){
    'use strict';

    // Banner Slide
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        arrows: false,
        dots: true
      });

    //   About Video Js Start
    $('.my-video-links').venobox()


    //  Testimonials slider

    $('.testimonials').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      dots: true,
      arrows: false,
      nextArrow: false,
      prevArrow: false
  });

});