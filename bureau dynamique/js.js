var val = 0;
$('button').click(function() {
	if($(this).attr('id') == 'next') {
		val += 45;
		$('section').css('-webkit-transform','rotateY(-'+val+'deg)'); 
	}
	else if($(this).attr('id') == 'prev') {
		val -= 45;
		$('section').css('-webkit-transform','rotateY(-'+val+'deg) ');
	}
});