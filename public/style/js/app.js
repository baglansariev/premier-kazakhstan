$(function(){
	var photoLenght = $('div.photo').length;
	var imgHeight = [];
	for(var i = 0; i < photoLenght; i++){
		imgHeight[i] = $($('div.photo')[i].children[0]).height();
	}
	var minHeight = Math.min.apply(Math, imgHeight);

	// for(var i = 0; i < photoLenght; i++){
	// 	$('div.photo').height(minHeight);
	// }
	
});