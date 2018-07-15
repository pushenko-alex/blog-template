window.onload = function () {
	$('.burger').on('click', function () {
	$('.gadget').toggleClass('click-burger');
	});
	/**/
	$(window).resize(function() {
		$('.gadget').removeClass('click-burger');
	});
	/**/
	
	$('.sign-up').on('click', function () {
		$('.sign-up').toggleClass('position-btn');

	});
/**/
	$('.sign-up').on('click', function () {
		$('.btn').toggleClass('opacity-btn');

	});
};