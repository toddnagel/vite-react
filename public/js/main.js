/*-----------------------------------------------------------------

Template Name: AIForge - AI Startup & Technology HTML Template 
Author:  namespace-it
Author URI: https://themeforest.net/user/namespace-itportfolio
Version: 1.0.0
Description: AIForge - AI Startup & Technology HTML Template <
------------------------------------------------------------------*/

(function ($) {
  'use strict';

  $(document).ready(function () {
    //>> Wow Animation Start <<//
    new WOW().init();

    // Hero Slider Start <<//
    const sliderActive1 = '.news-hero-slider';
    const sliderInit1 = new Swiper(sliderActive1, {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.array-prev',
        prevEl: '.array-next',
      },
    });

    // content animation when active start here
    function animated_swiper(selector, init) {
      var animated = function animated() {
        $(selector + ' [data-animation]').each(function () {
          var anim = $(this).data('animation');
          var delay = $(this).data('delay');
          var duration = $(this).data('duration');
          $(this)
            .removeClass('anim' + anim)
            .addClass(anim + ' animated')
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one('animationend', function () {
              $(this).removeClass(anim + ' animated');
            });
        });
      };
      animated();
      init.on('slideChange', function () {
        $(sliderActive1 + ' [data-animation]').removeClass('animated');
      });
      init.on('slideChange', animated);
    }

    animated_swiper(sliderActive1, sliderInit1);

    //>> Back To Top Slider Start <<//
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('#back-top').addClass('show');
      } else {
        $('#back-top').removeClass('show');
      }
    });
    $('#back-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }); // End Document Ready Function

  function loader() {
    $(window).on('load', function () {
      // Animate loader off screen
      $('.preloader').addClass('loaded');
      $('.preloader').delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery
