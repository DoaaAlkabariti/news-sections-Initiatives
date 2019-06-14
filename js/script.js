jQuery(document).ready(function($) {
	
            "use strict";
	
            if ($.isFunction($.fn.niceSelect)) {
                $('select').niceSelect();
            }
		
            //progress line for page loader
		$('body').show();
		$('.version').text(NProgress.version);
		NProgress.start();
		setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 2000);
		$("#b-0").on('click', function() { NProgress.start(); });
		$("#b-40").on('click', function() { NProgress.set(0.4); });
		$("#b-inc").on('click', function() { NProgress.inc(); });
		$("#b-100").on('click', function() { NProgress.done(); });
		
            //accordion
            if ($.isFunction($.fn.ziehharmonika)) {
                $('.ziehharmonika').ziehharmonika({
                    collapsible: true,
                    collapseIconsAlign: 'right',
                    collapseIcons: {
                        opened: '&ndash;',
                        closed: '+'
                    },
                });
            }
		
		
            //become valunter form
            var volunteer_form = $('.new-valunteer-form');
            $('.volenter-btn').on('click', function() {
                volunteer_form.addClass('open');
                return false;
            });
            $('.valunte-closed').on('click', function() {
                volunteer_form.removeClass('open');
                return false;
            });
		
            //for open and close button rotation
            $('#nav-icon3').on('click', function(){
                $(this).toggleClass('open');
                return false;
            });
		
            //share social on single page 
            $('.shareon').on('click', function(){
                $(this).toggleClass('active');
                return false;
            });
		
            //for open responsive menu
            $('#nav-icon3').on('click', function () {
                $('.responsive-menu').toggleClass('slidein');
                return false;
            });
	
            // turn box function for team 	
            if ($.isFunction($.fn.turnBox)) {
                $(".turn-y").turnBox({
                    width: 270,
                    height: 230
                });
            }
		
            // Index Page Scripts End
            if ($.isFunction($.fn.downCount)) {
                $('.countdown').downCount({
                    date: '09/26/2020 12:00:00',
                    offset: +10
                });
            }
		
            //our cause section carousel
            if ($.isFunction($.fn.owlCarousel)) {
		$('.our-cause-caro').owlCarousel({
					loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:true,
					autoplay:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:3,
                            nav:true
                        },
                        1000:{
                            items:3,
                            nav:true,
                            loop:true
                        }
                    }
		});
		
		//awards winning voluntee
		$('.awards').owlCarousel({
                    loop:true,
                    margin:20,
                    smartSpeed: 1000,
                    autoplay:true,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:3,
                            nav:true
                        },
                        1000:{
                            items:5,
                            nav:true,
                            loop:false
                        }
                    }
		});
			
		//our sponsors carousel
		$('.our-sponsors').owlCarousel({
                    loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
					autoplay:true,
                    responsive:{
                        0:{
                            items:2,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:4,
                            nav:true
                        },
                        1000:{
                            items:4,
                            nav:true,
                            loop:false
                        }
                    }
		});
		
		//news meta
		  $('.news-carousel-btn').owlCarousel({ 
                    loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    URLhashListener:true,
                    startPosition: 'URLHash',
                    responsive:{
                        0:{
                            items:2,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:3,
                            nav:false
                        },
                        1000:{
                            items:4,
                            nav:false,
                            loop:false,
                            dots:false
                        }
                    }
		});
		
		//recent news carosel
		 $('.recent-news-caro').owlCarousel({
                    items:1,
                    loop:false,
                    smartSpeed: 1000,
                    center:true,
                    margin:20,
                    dots:false,
                    nav:true,
                    URLhashListener:true,
                    autoplayHoverPause:true,
                    responsiveClass:true,
                    startPosition: 'URLHash',
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:1,
                            nav:false
                        },
                        1000:{
                            items:1,
                            nav:true,
                            loop:false
                        }
                    }	
		});
		
		//comming event carousel
		$('.coming-events-caro').owlCarousel({
                    loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:2,
                            nav:true
                        },
                        1000:{
                            items:2,
                            nav:true,
                            loop:false
                        }
                    }
		});
		
		//comming event carousel
		$('.success-story-caro').owlCarousel({
                    loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:3,
                            nav:true
                        },
                        1000:{
                            items:4,
                            nav:true,
                            loop:false
                        }
                    }
		});
		
		// walfare carousel
		$('.walfare-caro').owlCarousel({
                    loop:true,
                    margin:0,
                    smartSpeed: 1000,
                    autoplay:false,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:1,
                            nav:true,
                            dots:false
                        },
                        600:{
                            items:1,
                            nav:true
                        },
                        1000:{
                            items:1,
                            nav:true,
                            loop:false
                        }
                    }
		});
		
		// spokes man carousel
		$('.spokes-men-caro').owlCarousel({
                    loop:true,
                    margin:30,
                    smartSpeed: 1000,
                    responsiveClass:true,
                    nav:true,
                    dots:false,
                    responsive:{
                        0:{
                            items:2,
                            nav:true,
                            dots:false
                        },
                        600:{
                            items:4,
                            nav:true
                        },
                        1000:{
                            items:5,
                            nav:true,
                            loop:false
                        }
                    }
		});
		
		// featured carousel
		$('.featured-caro').owlCarousel({
                    loop:true,
                    margin:0,
                    smartSpeed: 1000,
                    autoplay:true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadein',
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:1,
                            nav:false
                        },
                        1000:{
                            items:1,
                            nav:false,
                            dots:false,
                            loop:true
                        }
                    }
		});
		
		// featured carousel
		$('.featured-text-caro').owlCarousel({
                    loop:true,
                    margin:0,
                    smartSpeed: 1000,
                    autoplay:true,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:1,
                            nav:false
                        },
                        1000:{
                            items:1,
                            nav:false,
                            dots:false,
                            loop:true
                        }
                    }
		});
		
		// twitter feeds widget carousel
		$('.twitter-feed').owlCarousel({
                    loop:true,
                    margin:0,
                    smartSpeed: 1000,
                    autoplay:true,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false
                        },
                        600:{
                            items:1,
                            nav:false
                        },
                        1000:{
                            items:1,
                            nav:false,
                            dots:false,
                            loop:true
                        }
                    }
		});
	}

            
//parallax
	if ($.isFunction($.fn.scrolly)) {
		$('.parallax').scrolly({bgParallax: true});
	}

//smooth scroll
	if ($.isFunction($.fn.smoothScroll)) {
		$('html').smoothScroll(700);
	}

//----- sticky header
	if ($.isFunction($.fn.stickit)) {
		$('.fixed').stickit({scope: StickScope.Document});
	}

	//Responsive Header
	$('.responsive-menu li.menu-item-has-children > a').on('click', function () {
            var parent = $(this).parent();
            var parent_sibling = $(this).parent().siblings();
            parent_sibling.children('ul').slideUp();
            parent_sibling.removeClass('active');
            parent.children('ul').slideToggle();
            parent.toggleClass('active');
            return false;
	});
	
            // responsive search
            $('.res-search').on('click', function () {
                $('.search-insite').addClass('open');
                return false;
            });
            $('.search-insite > i').on('click', function () {
                $('.search-insite').removeClass('open');
                return false;
            });
	
            //at page featured area become valunter form	
            $('.become-valante').on('click', function() {
                $('.new-valunteer-form').toggleClass('open');
                return false;
            });
					
            // initiciate jPages pagination 6posts
            if ($.isFunction($.fn.jPages)) {
                $("div.holder").jPages({
                    containerID: "itemContainer",
                    animation: "fadeInUp",
                    perPage: 6
                });
            }

            // on select change
            $("select").on('change', function () {
                var newAnimation = $(this).val();
                $("div.holder").jPages("destroy").jPages({
                    containerID: "itemContainer",
                    animation: newAnimation
                });
            });
            
		
            /* initiciate jPages pagination show 8posts */
            if ($.isFunction($.fn.jPages)) {
                $("div.holder2").jPages({
                    containerID: "itemContainer",
                    animation: "fadeInUp",
                    perPage: 8
                });
            }

            /* on select change */
            $("select").on('change', function () {
                
            /* get new css animation */
            var newAnimation = $(this).val();

            /* destroy jPages and initiate plugin again */
            $("div.holder.event").jPages("destroy").jPages({
                    containerID: "itemContainer",
                    animation: newAnimation
                });
            });		
            
		
            //counter for funfacts
            if ($.isFunction($.fn.counterUp)) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            }

            //scrollbar plugin
            if ($.isFunction($.fn.perfectScrollbar)) {
                $('.responsive-menu').perfectScrollbar();
            }
	
            if ($.isFunction($.fn.accordion)) {
                $('.accordion').accordion({
                    "transitionSpeed": 400
                });
            }
	
            //testimonials style on hover
            var who = jQuery('#testimonials-container-1');
            who.find('.testimonials-content').height( who.find('.testimonials-content .testimonial.active > p').height() + who.find('.testimonials-content .testimonial.active > span').height() +40 );
            who.find('.testimonial-nav a').on('click', function(e){
                e.preventDefault();
            });
            who.find('.testimonial-nav a').on('mouseenter', function(){
                who.find('.testimonial-nav a').removeClass('active');
                jQuery(this).addClass('active');
                who.find('.testimonial.active').removeClass('active');
                who.find(jQuery(this).attr('href')).addClass('active');
                who.find('.testimonials-content').height( who.find('.testimonials-content .testimonial.active > p').height() + who.find('.testimonials-content .testimonial.active > span').height() +40 );
            });
					
            // slick carousel for testimonial
            if ($.isFunction($.fn.slick)) {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    slide: 'li',
                    fade: false,
                    asNavFor: '.slider-nav'
                });

                $('.slider-nav').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    arrows: false,
                    slide: 'li',
                    vertical: false,
                    centerMode: true,
                    centerPadding: '0',
                    focusOnSelect: true,
                    responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            vertical: false,
                            centerMode: true,
                            dots: false,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            vertical: false,
                            centerMode: true,
                            dots: false,
                            arrows: false
                        }
                    }
                    ]
                });
            }
            $(".fromup").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animated slideInDown"); 
                } 
            });
            // From Left animation script 
            $(".fromleft").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animated fadeInLeft"); 
                }
            });
            // From Right animation script 
            $(".fromright").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animated fadeInRight"); 
                } 
            });
          
            // From Down animation script
            $(".fromdown").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animated fadeInUp"); 
                } 
            });
	  
            $(".fadein").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animated fadeIn"); 
                } 
            });
	
	});

	/*=== Document.Ready Ends Here ===*/     
	$(window).scroll(function() { 
            // From Up animation script 
            $(".fromup").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                  el.addClass("animated slideInDown"); 
                }
            });
            // From Left animation script 
            $(".fromleft").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                  el.addClass("animated fadeInLeft"); 
                }
            });
            // From Right animation script 
            $(".fromright").each(function(i, el) {
                  var el = $(el);
                  if (el.visible(true)) {
                      el.addClass("animated fadeInRight"); 
                  } 
            });
            // From Down animation script
            $(".fromdown").each(function(i, el) {
                var el = $(el);
		if (el.visible(true)) {
                    el.addClass("animated fadeInUp"); 
		} 
            });
	  
            $(".fadein").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                  el.addClass("animated fadeIn"); 
                }
            });
	});

	// wizard form jquery 
	jQuery(document).ready(function($) {
		"use strict";
		//Initialize tooltips
		$('.nav-tabs > li a[title]').tooltip();
		
		//Wizard
		$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
			var $target = $(e.target);
			if ($target.parent().hasClass('disabled')) {
				return false;
			}
		});
		
		$(".next-step").on('click', function (e) {
			var $active = $('.wizard .nav-tabs li.active');
			$active.next().removeClass('disabled');
			nextTab($active);
		});
		$(".prev-step").on('click', function (e) {
			var $active = $('.wizard .nav-tabs li.active');
			prevTab($active);
		});
	});
		
	function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
	}
	function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
	}
	
	//===== Ajax Contact Form =====//
	$(document).ready(function(){
		"use strict";
	$('#contactform').on('submit', function () {
		
		var action = $(this).attr('action');
		var msg = $('#message');
		$(msg).hide();
		var data = 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&phone=' + $('#phone').val() + '&comments=' + $('#comments').val() + 				'verify=' + $('#verify').val() + 'captcha=' + $(".g-recaptcha-response").val();
		$.ajax({
		type: 'POST',
		url: action,
		data: data,
		beforeSend: function () {
			$('#submit').attr('disabled', true);
			$('img.loader').fadeIn('slow');
		},
		success: function (data) {
			var msg = $(msg);
			$('#submit').attr('disabled', false);
			$('img.loader').fadeOut('slow');
			msg.empty();
			msg.html(data);
			$('#message').slideDown('slow');
			if (data.indexOf('success') > 0) {
				$('#contactform').slideUp('slow');
			}
		}
	});
		return false;
	});
		
	//Side Panel Functions
	$(".sticky").on('click', function(){
            $("header").addClass("fixed");
            return false;
	});
	$(".non-sticky").on('click', function(){
            var header = $("header");
            header.removeClass("fixed");
            header.removeClass("sticky");
            return false;
	});
	
	
	$(".panel-icon").on('click', function(){
            $(".side-panel").toggleClass("show");
	});	
	
	$(".boxed-style").on('click', function(){
            $(".site-layout").addClass("boxed");
            $("body").addClass('bg-body1');
	});
	$(".full-style").on('click', function(){
            $(".site-layout").removeClass("boxed");
            var body = $("body");
            body.removeClass('bg-body1');
            body.removeClass('bg-body2');
            body.removeClass('bg-body3');
            body.removeClass('bg-body4');
	});
	$(".pat1").on('click', function(){
            var body = $('body');
            body.addClass('bg-body1');
            body.removeClass('bg-body2');
            body.removeClass('bg-body3');
            body.removeClass('bg-body4');
	});
	$(".pat2").on('click', function(){
            var body = $("body");
            body.removeClass('bg-body1');
            body.addClass('bg-body2');
            body.removeClass('bg-body3');
            body.removeClass('bg-body4');
	});
	$(".pat3").on('click', function(){
            var body = $("body");
            body.removeClass('bg-body1');
            body.removeClass('bg-body2');
            body.addClass('bg-body3');
            body.removeClass('bg-body4');
	});
	$(".pat4").on('click', function(){
            var body = $('body');
            body.removeClass('bg-body1');
            body.removeClass('bg-body2');
            body.removeClass('bg-body3');
            body.addClass('bg-body4');
	});
			
});
	
	$("body").append("<div class='loading'></div>");

	jQuery(window).load(function(){
		"use strict";
            $(".loading").fadeOut();
	});
	
(function ($, window, document, undefined) {
	'use strict';

var $document, $window;
	$window = $(window);
	$document = $(document);
	//Page Load
	function pageLoad() {
		var $body = $('body');
		$window.on('beforeunload', function() {
			$body.addClass('fix-fade-out');
		});
	}
	
	$(document).ready(function() {
		pageLoad();

	});
})(jQuery, window, document);		