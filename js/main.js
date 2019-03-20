$(document).ready(function() {
	"use strict";
	// $(window).load(function() {
	// 	$(".preloader-container").fadeOut();
	// 	$(".preloader").delay(1000).fadeOut("slow");
	// });

	// /*	------------------------------------
	// 		About us page section
	// ----------------------------------------   */
	// // Skilled bar section started 
	// $('.skillbar').each(function(){
	// 	$(this).find('.skillbar-bar').animate({
	// 		width:$(this).attr('data-percent')
	// 	},3000);
	// });
	// Skilled bar section end

		$( '#my-slider' ).sliderPro({
			width: '100vw',
			height: '100vh',
			arrows: true,
			buttons: false,
			waitForLayers: true,
			fade: false,
			autoplay: true,
			autoScaleLayers: false,
			autoHeight: true,
			autoSlideSize: true
		});
});

