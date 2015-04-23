
$(document).ready(function (){

	var i = 0;
	//append new div with text and buttons
	$('button').click(function(){
		i++;
		$('#container').append("<div class='newEntry'>Line # " + i + "<button class='changeColor'>Change Color</button> <button class='removeButton'>Remove</button></div>");
	});

	//change background color of clicked div
	$("#container").on('click', '.changeColor',function() {
		$(this).parent().toggleClass('selected');
	});

	//remove clicked div
	$("#container").on('click', '.removeButton',function() {
		$(this).parent().fadeOut("600");
	});
	
	$("#tennis").mouseenter.(function(){
		$("h1").text("hi");
	});
});



