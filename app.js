$(document).ready(function() {

genDivs(16);
hoverCell();

//clear the board
$('#clear').on('click', function(){
		clearBoard();
	});	

//make a new box
$('#newBox').on('click', function(){
	$('#container').empty();
	var newBox = prompt("How big would you like your box to be?");
	genDivs(newBox);
	hoverCell();
});

//switch to default mode
$('#default').on('click', function(){
	clearBoard();
	defaultMode();
});

//switch to opacity mode
$('#opacity').on('click', function(){
	clearBoard();
	shadingMode();
});

//switch to random mode
$('#random').on('click', function(){
	clearBoard();
	randomMode();
});

function genDivs(boxSize){
/*var boxSize = prompt("What would you like the size of your box to be??");*/
var $container = $('#container');


	var cellSize = (750 - 2 * boxSize) / boxSize ;
	for(i=0; i < boxSize; i++){
		for( j = 0; j < boxSize; j++){
			$container.append( $('<div></div>').addClass('cell').height(cellSize).width(cellSize) );
		}
		$container.append($('<div></div>').css('clear', 'both'));
	}


} //end of genDivs()

function hoverCell(){
	$('.cell').on('mouseenter',function(){
		$(this).css('background', 'black');
	});
}

function clearBoard(){
		$('.cell').css('background', 'white'); //returns color to default
		$('.cell').css('opacity', 1); //returns opacity to default
}

function shadingMode(){
	$('.cell').unbind('mouseenter mouseleave');
	hoverCell();
	$('.cell').on('mouseenter', function(){
		var currentOpacity = $(this).css('opacity');
		$(this).css('opacity', currentOpacity * .9);//shade the hovered cell a bit
	});
}

function defaultMode(){
	$(function(){
		$('.cell').unbind('mouseenter mouseleave');//takes hover event listeners off (this would be the event listeners for shading and random)
		$('.cell').on('mouseenter', function(){//adds default hover event listener
			$(this).css('background', 'black');
		});
	});
}

function randomMode(){
$('.cell').unbind('mouseenter mouseleave');

	var safeColors = ['00','33','66','99','cc','ff'];
	var rand = function() {
   	 	return Math.floor(Math.random()*6);
	};

	var randomColor = function() {
    	var r = safeColors[rand()];
   		var g = safeColors[rand()];
   		var b = safeColors[rand()];
    	return "#"+r+g+b;
	};

	$('.cell').on('mouseenter', function(){
		
		$(this).css('background', randomColor());
	});
}

});