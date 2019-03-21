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

	
	// Count Down section javaScript section
	$('.do-count-number').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 6000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
		
});

