// layer slider initilization
jQuery(document).ready(function( $ ) {
	"use strict";
        /* ============ LAYER SLIDER ================*/
		jQuery("#layerslider").layerSlider({
			responsive: true,
			responsiveUnder: 1280,
			layersContainer: 1170,
			skin: 'fullwidth',
			hoverPrevNext: true,
			skinsPath: 'layerslider/skins/'
		});

        /* ============ Load More ================*/
        var data = $('div#temp_more');
        var count = $(data).children().length;
		$(".loadmore").click(function(){
			var post = $(data).children().eq(0);
			$('div#temp_more').before(post.addClass("added"));
			if( $(data).children().length == 0 ){
	        	$(".loadmore").addClass("animated zoomOut").delay(100).fadeOut("slow");;
	        }
			return false;
		});

	});	