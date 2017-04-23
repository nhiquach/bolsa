$(document).ready(function() {
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 260
	});

	$('#top-link').click(function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('#down-link').click(function() {
		$('html, body').animate({scrollTop: 1150}, 1000);
	});

});