$(document).ready(function() {

	var indexVertical=0; 
	var indexHorizontal=0;



	$('#case_1').hide();
	$('#case_2').hide();
	$('#case_3').hide();
	$('#case_4').hide();
	$('#case_5').hide();
	$('#case_6').hide();
	$('#case_7').hide();
	$('#case_8').hide();
	$('#logo').hide();
	$('#menu').hide();
	$('#page1').hide();
	$('#page2').hide();
	$('#page2').hide();
	$('#page3').hide();
	$('#page4').hide();


	$('#case_1').fadeIn(800);
	$('#case_2').fadeIn(900);
	$('#case_3').fadeIn(1000);
	$('#case_4').fadeIn(1100);
	$('#case_5').fadeIn(1200);
	$('#case_6').fadeIn(1300);
	$('#case_7').fadeIn(1400);
	$('#case_8').fadeIn(1500);


	$('#enter').click(function(){

		$('#enter').fadeOut(700);
		$('.date').fadeOut(500);

		$('#case_1').animate({
			top: '-100px'
		},1500);

		$('#case_2').animate({
			top:1000
		},1500);

		$('#case_3').animate({
			top:-100
		},1500);

		$('#case_4').animate({
			top:1000
		},1500);

		$('#case_5').animate({
			top:-100
		},1500);

		$('#case_6').animate({
			top:1000
		},1500);

		$('#case_7').animate({
		top:-100
		},1500);

		$('#case_8').animate({
		top:1000
		},1500);
		
		$('#case_1').hide();
		$('#case_2').hide();
		$('#case_3').hide();
		$('#case_4').hide();
		$('#case_5').hide();
		$('#case_6').hide();
		$('#case_7').hide();
		$('#case_8').hide();
//hello menu
		$('#logo').fadeIn(3000);
		$('#menu').fadeIn(3000);
		$('#page1').fadeIn(3000);
	})


	$('#news').click(function(){

		$('#page1').fadeOut(500);
		$('#page3').fadeOut(500);
		$('#page4').fadeOut(500);


		$('#page2').fadeIn(2000);})

	$('#home').click(function(){

		$('#page2').fadeOut(500);
		$('#page3').fadeOut(500);
		$('#page4').fadeOut(500);

		$('#page1').fadeIn(2000);})

	$('#gallery').click(function(){

		$('#page2').fadeOut(500);
		$('#page1').fadeOut(500);
		$('#page4').fadeOut(500);

		$('#page3').fadeIn(2000);})

	$('#cast').click(function(){

		$('#page1').fadeOut(500);
		$('#page2').fadeOut(500);
		$('#page3').fadeOut(500);

		$('#page4').fadeIn(2000);

	})
	function changeContenu(){
		$("#contMenuHorizontal").html("");


		indexHorizontal=0;

		switch (indexHorizontal) { 
			case 0: 
				$("#contMenuHorizontal").html('<div class="imageMenuHorizontal"><img src="images/gallery3.jpg"></div>');
					
				break; 

			 
}
}
	function changeContenuGauche(){
		$("#contMenuHorizontal").html("");


		indexHorizontal=0;

		switch (indexHorizontal) { 
			case 0: 
				$("#contMenuHorizontal").html('<div class="imageMenuHorizontal"><img src="images/gallery1.jpg"></div>');
					
				break; 

			 
}
	}

$("#boutonDroite").click(function (){
changeContenu();
}) 

$("#boutonGauche").click(function (){
changeContenuGauche();
})
});