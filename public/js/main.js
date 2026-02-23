(function ($) {
  'use strict';

  $(document).ready(function () {
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
  });

  // function loader() {
  //   $(window).on('load', function () {
  //     // Animate loader off screen
  //     $('.preloader').addClass('loaded');
  //     $('.preloader').delay(600).fadeOut();
  //   });
  // }

  // loader();
})(jQuery); // End jQuery
