var colors = generateRandomColor(6);

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
		console.log(this.style.backgroundColor,pickedColor);
		if(this.style.backgroundColor===pickedColor)
		{

			messageDisplay.textContent="correct";
			changeColors(pickedColor);
			document.querySelector("h1").style.backgroundColor=pickedColor;
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

function generateRandomColor(num)
{
	var arr = [];
	for (var i = 0; i <num; i++) {
		
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b =  Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+ ")";
}