$(document).ready(function(){
		$('.details:first').show();
	$('.navi li:first').addClass('active');

	$('.navi li').click(function(event) {
		index = $(this).index();
		$('.navi li').removeClass('active');
		$(this).addClass('active');
		$('.details').hide();
		$('.details').eq(index).show();
	});
});