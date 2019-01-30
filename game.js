var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor =colors[3] ;
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//initial colors
	squares[i].style.backgroundColor=colors[i];
	//click listeners
	squares[i].addEventListener("click",function(){
		
		if(this.style.backgroundColor==pickedColor)
		{
			console.log("correct");
			
		}
		else{
			console.log("Try Again");
		}
	});
}