// About us page section

// Skilled bar section started 
$(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});
// Skilled bar section end
