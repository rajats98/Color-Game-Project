var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor =pickColor() ;
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

var messageDisplay = document.getElementById('message');

for (var i = 0; i < squares.length; i++) {
	//initial colors
	squares[i].style.backgroundColor=colors[i];
	//click listeners
	squares[i].addEventListener("click",function(){
		
		if(this.style.backgroundColor==pickedColor)
		{
			messageDisplay.textContent="correct";
			changeColors(pickedColor);
		}
		else{
			this.style.backgroundColor ="darkgrey";
			messageDisplay.textContent="Try Again";


		}
	});
}

function changeColors(color)
{
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}