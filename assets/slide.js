
$(document).ready(function(){


var ancho = window.innerWidth;
var alto = window.innerHeight;

var slideMedidas = document.querySelector('#slide');
var imagenMedidas = document.querySelector('#imagen');
slideMedidas.style.height = ( alto  ) +"px";
imagenMedidas.style.height = ( alto ) +"px";


var cover = document.querySelector('#cover');
cover.style.height = ( alto  ) +"px";


	$("#cover img").each(function(index, elemento){
		$(this).css({
			"marginTop":"-16%"
		});


		$(this).animate({
				"marginTop":"15%"
			},2000, function(){

		$("#cover p").animate({
					"marginTop":"1%",
					"opacity":1
					
				},1000, function(){
						$(".cover").css({
							"display":"none"
						});

					});
			

		});
	});

	var item = 0;
	var itemPaginacion = $("#numeracion li");

	var texto = [
	"Lorem ipsum dolor sit amet",
	"consectetur adipisicing elit.",
	"Asperiores quo temporibus porro",
	"dolorum quas tempore architecto nulla",
	"cumque consequatur quos ipsum, laborum",
	"a incidunt. Doloribus, reprehenderit.", 
	"Minima incidunt, eius labore.",
	"dolorum quas tempore architecto nulla",
	"consectetur adipisicing elit."
	];

	$("#numeracion li").click(function(){
		item = $(this).attr("item")-1;
		movimientoSlide(item);
	});


	function movimientoSlide(item){
		

		if(ancho >= 1920){
			$('#slide').animate({
				"left": (item * -ancho)/1.8  + "px"
			},300);
		}
		if(ancho >= 1200 && ancho <= 1919){
			
			$('#slide').animate({
				"left": (item * -ancho)/1.6  + "px"
			},300);
		}

		if(ancho >= 992 && ancho <= 1119){
			
			$('#slide').animate({
				"left": (item * -ancho)/1.3  + "px"
			},300);
		}

		if(ancho >= 426 && ancho <= 991){
			
			$('#slide').animate({
				"left": (item * -ancho)/1 + "px"
			},300);
		}

		if(ancho <= 425){
			$('#slide').animate({
				"left":(1800 * -item)/10 + "%"

			},300);
			console.log(item)
			console.log( (1800 * -item)/10);
		}

		itemPaginacion.css({
			"opacity":0.5
		});
		$(itemPaginacion[item]).css({
			"opacity":1
		});
		
		for (var i= 1; i < texto.length; i++) {
			var imprimir = texto[i];
			
			if(item == i){
				if( item%2 == 0){
					$("#titulo").removeClass('tituloDos');
					$("#titulo").addClass('titulo');
					document.querySelector('h1').innerHTML = imprimir;
		 			console.log( item%2 );
				}else{ 
					$("#titulo").removeClass('titulo');
					$("#titulo").addClass('tituloDos');
					document.querySelector('h1').innerHTML = imprimir;

				}
		 	}
		 	if(item == 0){
		 		$("#titulo").removeClass('tituloDos');
				$("#titulo").addClass('titulo');
		 		document.querySelector('h1').innerHTML = "We are breaking our vow of Silence";
		 	}

		}

	}



	$("#avanzar").click(function(){

		if(item == 9){
			item = 0;
		
		}else{
			item++
		}

		movimientoSlide(item);
	});


	$("#retroceder").click(function(){

		if(item == 0){
			item = 9;
		}else{
			item--
		}

		movimientoSlide(item);
	});



});