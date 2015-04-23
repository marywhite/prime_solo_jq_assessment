// // In your HTML, include a ‘generate’ button, 
// // that when clicked, will generate a new div container 
// // in the app.js. The new div should include some text 
// // that reads “Line #” and then a number specific to the number of time the generate button has been clicked. 
// In addition to the text, you will need to include 
// two buttons within the new div. One button will be entitled 
// // ‘Change Color’ and the other button will entitled “Remove”.

$(document).ready(function (){

	var i = 0;
	//append new div with text and buttons
	$('button').click(function(){
		i++;
		$('#container').append("<div>Line # " + i + "<button class='changeColor'>Change Color</button> <button class='removeButton'>Remove</button></div>");
	});

	//change background color of clicked div
	$("#container").on('click', '.changeColor',function() {
		$(this).parent().toggleClass('selected');
	});

	//remove clicked div
	$("#container").on('click', '.removeButton',function() {
		$(this).parent().remove();
	});
	
});



