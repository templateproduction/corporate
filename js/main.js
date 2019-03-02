/*	------------------------------------
		About us page section
----------------------------------------   */
// Skilled bar section started 
$(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},3000);
	});
});
// Skilled bar section end
