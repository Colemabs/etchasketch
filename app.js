$(document).ready(function() {

function genDivs(){
var boxSize = prompt("What would you like the size of your box to be??");
var $container = $('#container');
var $row = $('.row')
	

	for(i = 0; i < boxSize; i++){
		$container.append("<div class='row'></div>").addClass(function( i ){
			return 'row' + i;
		});

		for(x = 0; x < boxSize; x++ ){
			
			$container.append("<div class='cell'></div>");
		}
	}

} //end of genDivs()

function hoverCell(){
	$('.cell').on('mouseenter',function(){
		$(this).css('background', 'red');
	});
}

genDivs();
hoverCell();
});