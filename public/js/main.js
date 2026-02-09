/*-----------------------------------------------------------------

Template Name: AIForge - AI Startup & Technology HTML Template 
Author:  namespace-it
Author URI: https://themeforest.net/user/namespace-itportfolio
Version: 1.0.0
Description: AIForge - AI Startup & Technology HTML Template <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function($) {
    "use strict";

    $(document).ready( function() {
			//>> Sticky Header Js Start <<//

			$(window).scroll(function () {
				if ($(this).scrollTop() > 250) {
					$("#header-sticky").addClass("sticky");
				} else {
					$("#header-sticky").removeClass("sticky");
				}
			});

			//>> Counterup Start <<//
			$(".count").counterUp({
				delay: 15,
				time: 4000,
			});

			//>> Wow Animation Start <<//
			new WOW().init();

			//>> Nice Select Start <<//
			$("select").niceSelect();

			//>> Hero-3 Slider Start <<//

			// Hero Slider Start <<//
			const sliderActive1 = ".news-hero-slider";
			const sliderInit1 = new Swiper(sliderActive1, {
				loop: true,
				slidesPerView: 1,
				effect: "fade",
				speed: 2000,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
			});

			// content animation when active start here
			function animated_swiper(selector, init) {
				var animated = function animated() {
					$(selector + " [data-animation]").each(function () {
						var anim = $(this).data("animation");
						var delay = $(this).data("delay");
						var duration = $(this).data("duration");
						$(this)
							.removeClass("anim" + anim)
							.addClass(anim + " animated")
							.css({
								webkitAnimationDelay: delay,
								animationDelay: delay,
								webkitAnimationDuration: duration,
								animationDuration: duration,
							})
							.one("animationend", function () {
								$(this).removeClass(anim + " animated");
							});
					});
				};
				animated();
				init.on("slideChange", function () {
					$(sliderActive1 + " [data-animation]").removeClass("animated");
				});
				init.on("slideChange", animated);
			}

			animated_swiper(sliderActive1, sliderInit1);
 	
			//>> Custom Accordion Tabs <<//
			$(".accordion-single .header-area").on("click", function () {
				if ($(this).closest(".accordion-single").hasClass("active")) {
					$(this).closest(".accordion-single").removeClass("active");
					$(this).next(".content-area").slideUp();
				} else {
					$(".accordion-single").removeClass("active");
					$(this).closest(".accordion-single").addClass("active");
					$(".content-area").not($(this).next(".content-area")).slideUp();
					$(this).next(".content-area").slideToggle();
				}
			});

			//>> team Slider Start <<//
			if($('.team-slider').length > 0) {
				const TeamSlider = new Swiper(".team-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 4,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}
	

			//>> Progress Bar Js Start <<//
			$(".progress-bar").waypoint(
				function () {
					$(".progress-bar").css({
						animation: "animate-positive 2.6s",
						opacity: "1",
					});
				},
				{ offset: "75%" }
			);


			

			//>> Back To Top Slider Start <<//
			$(window).scroll(function () {
				if ($(this).scrollTop() > 20) {
					$("#back-top").addClass("show");
				} else {
					$("#back-top").removeClass("show");
				}
			});
			$("#back-top").click(function () {
				$("html, body").animate({ scrollTop: 0 }, 800);
				return false;
			});

		}); // End Document Ready Function



    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
   

})(jQuery); // End jQuery

