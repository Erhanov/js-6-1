$(document).ready(function() {
	console.log(0);

	$('.modal').css('top', '-200');

	$('a[href = "#sheldure"]').click(function(e) {
		e.preventDefault();
		$('.modal').animate({
			top: 0
		});
		$('.modal').show();
		$('.overlay').show();
		
	});

	$('.main_btna').on('click', function(e) {
		e.preventDefault();
		$('.modal').animate({
			top: 0
		});
		$('.modal').show();
		$('.overlay').show();
		
	});

	$('.main_btn').on('click', function(e) {
		e.preventDefault();
		$('.modal').animate({
			top: 0
		});
		$('.modal').show();
		$('.overlay').show();
		
	});

	$('.close').on('click', function(e) {
		e.preventDefault();
		$('.modal').animate({
			top: -200
		});
		$('.modal').hide('slow');
		$('.overlay').hide('slow');
		
	});

}); 