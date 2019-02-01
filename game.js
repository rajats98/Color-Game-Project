var numSquares =6;

var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor =pickColor() ;
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var resetbutton = document.getElementById('reset');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none"	;
		} 
	}

});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block"	;
	}

});




resetbutton.addEventListener("click",function(){
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	document.getElementById('message').textContent="";

});

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
			resetbutton.textContent="Play Again?";

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