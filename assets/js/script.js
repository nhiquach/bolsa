$(document).ready(function() {
	
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 260
	});

	$('#top-link').click(function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('#down-link').click(function() {
		$('html, body').animate({scrollTop: 1100}, 1000);
	});

	// Grid Puzzle 

	$('#grid-0-0').click(function() {
		if ( $('#0-0').css('display') == 'none' ){
			$('#0-0').show()
			$('#caption-0-0').show(); 
			$('#0-0-back').hide()
		} else {
			$('#0-0').hide()
			$('#caption-0-0').hide(); 
			$('#0-0-back').show()
		}
	});

	$('#grid-0-1').click(function() {
		if ( $('#0-1').css('display') == 'none' ){
			$('#0-1').show()
			$('#caption-0-1').show(); 
			$('#0-1-back').hide()
		} else {
			$('#0-1').hide()
			$('#caption-0-1').hide(); 
			$('#0-1-back').show()
		}
	});

	$('#grid-0-2').click(function() {
		if ( $('#0-2').css('display') == 'none' ){
			$('#0-2').show()
			$('#caption-0-2').show(); 
			$('#0-2-back').hide()
		} else {
			$('#0-2').hide()
			$('#caption-0-2').hide(); 
			$('#0-2-back').show()
		}
	});

	$('#grid-1-0').click(function() {
		if ( $('#1-0').css('display') == 'none' ){
			$('#1-0').show()
			$('#caption-1-0').show();
			$('#1-0-back').hide()
		} else {
			$('#1-0').hide()
			$('#caption-1-0').hide();
			$('#1-0-back').show()
		}
	});

	$('#grid-1-1').click(function() {
		if ( $('#1-1').css('display') == 'none' ){
			$('#1-1').show()
			$('#caption-1-1').show();
			$('#1-1-back').hide()
		} else {
			$('#1-1').hide()
			$('#caption-1-1').hide();
			$('#1-1-back').show()
		}
	});

	$('#grid-1-2').click(function() {
		if ( $('#1-2').css('display') == 'none' ){
			$('#1-2').show()
			$('#caption-1-2').show();
			$('#1-2-back').hide()
		} else {
			$('#1-2').hide()
			$('#caption-1-2').hide();
			$('#1-2-back').show()
		}
	});

	$('#grid-2-0').click(function() {
		if ( $('#2-0').css('display') == 'none' ){
			$('#2-0').show()
			$('#caption-2-0').show();
			$('#2-0-back').hide()
		} else {
			$('#2-0').hide()
			$('#caption-2-0').hide();
			$('#2-0-back').show()
		}
	});

	$('#grid-2-1').click(function() {
		if ( $('#2-1').css('display') == 'none' ){
			$('#2-1').show()
			$('#caption-2-1').show();
			$('#2-1-back').hide()
		} else {
			$('#2-1').hide()
			$('#caption-2-1').hide();
			$('#2-1-back').show()
		}
	});
	
	$('#grid-2-2').click(function() {
		if ( $('#2-2').css('display') == 'none' ){
			$('#2-2').show()
			$('#caption-2-2').show();
			$('#2-2-back').hide()
		} else {
			$('#2-2').hide()
			$('#caption-2-2').hide();
			$('#2-2-back').show()
		}
	});

	// Grid Captions

	$(function() {
			$('#grid-0-0').hover(function() { 
				if ( $('#0-0').css('display') != 'none' ) {
				    $('#caption-0-0').fadeIn(); 
				}
			}, function() { 
			    $('#caption-0-0').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-0-1').hover(function() { 
				if ( $('#0-1').css('display') != 'none' ) {
				    $('#caption-0-1').fadeIn(); 
				}
			}, function() { 
			    $('#caption-0-1').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-0-2').hover(function() { 
				if ( $('#0-2').css('display') != 'none' ) {
				    $('#caption-0-2').fadeIn(); 
				}
			}, function() { 
			    $('#caption-0-2').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-1-0').hover(function() { 
				if ( $('#1-0').css('display') != 'none' ) {
				    $('#caption-1-0').fadeIn(); 
				}
			}, function() { 
			    $('#caption-1-0').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-1-1').hover(function() { 
				if ( $('#1-1').css('display') != 'none' ) {
				    $('#caption-1-1').fadeIn(); 
				}
			}, function() { 
			    $('#caption-1-1').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-1-2').hover(function() { 
				if ( $('#1-2').css('display') != 'none' ) {
				    $('#caption-1-2').fadeIn(); 
				}
			}, function() { 
			    $('#caption-1-2').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-2-0').hover(function() { 
				if ( $('#2-0').css('display') != 'none' ) {
				    $('#caption-2-0').fadeIn(); 
				}
			}, function() { 
			    $('#caption-2-0').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-2-1').hover(function() { 
				if ( $('#2-1').css('display') != 'none' ) {
				    $('#caption-2-1').fadeIn(); 
				}
			}, function() { 
			    $('#caption-2-1').fadeOut(); 
			});
	});

	$(function() {
			$('#grid-2-2').hover(function() { 
				if ( $('#2-2').css('display') != 'none' ) {
				    $('#caption-2-2').fadeIn(); 
				}
			}, function() { 
			    $('#caption-2-2').fadeOut(); 
			});
	});

});