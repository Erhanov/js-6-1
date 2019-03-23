$(document).ready(function() {
	console.log(0);

	$('a[href = "#sheldure"]').click(function() {
		$('.modal').show();
		$('.overlay').show();
	});

	$('.main_btna').on('click', function() {
		$('.modal').show();
		$('.overlay').show();
	});

	$('.main_btn').on('click', function() {
		$('.modal').show();
		$('.overlay').show();
	});

	$('.close').on('click', function() {
		$('.modal').hide();
		$('.overlay').hide();
	})

}); 