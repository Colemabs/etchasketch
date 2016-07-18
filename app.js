$(document).ready(function() {

function genDivs(){
var height = prompt("How many blocks in your height?");
var width = prompt("How many blocks in your width?");
var $container = $('#container');
var $row = $('.row')
	

	for(i = 0; i < height; i++){
		$container.append("<div class='row'></div>").addClass(function( i ){
			return 'row' + i;
		});


		for(x = 0; x < width; x++ ){
			
			$container.append("<div class='cell'></div>");
		}
	}
	

}
genDivs();
});