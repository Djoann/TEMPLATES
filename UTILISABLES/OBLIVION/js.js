$(document).ready(function() {

	var indexVertical=0; 
	var indexHorizontal=0;


	$('#logo').hide();
	$('#menu').hide();
	$('#page1').hide();
	$('#page2').hide();
	$('#page2').hide();
	$('#page3').hide();



	$('#enter').click(function(){

		$('#enter').fadeOut(700);
		$('.date').fadeOut(500);

//hello menu
		$('#logo').fadeIn(3000);
		$('#menu').fadeIn(3000);
		$('#page1').fadeIn(3000);
	})


	$('#news').click(function(){

		$('#page1').fadeOut(500);
		$('#page3').fadeOut(500);


		$('#page2').fadeIn(2000);})

	$('#home').click(function(){

		$('#page2').fadeOut(500);
		$('#page3').fadeOut(500);

		$('#page1').fadeIn(2000);})

	$('#gallery').click(function(){

		$('#page2').fadeOut(500);
		$('#page1').fadeOut(500);

		$('#page3').fadeIn(2000);
	})

	
	});