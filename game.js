var numSquares =6;

var colors =[];
var squares = document.querySelectorAll(".square");
var pickedColor =pickColor() ;
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var resetbutton = document.getElementById('reset');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var modeButtons =document.querySelectorAll(".mode");
init();
function init(){
	setupModeButtonListener();
	setupSquares();
	reset();

}
function setupModeButtonListener(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent=== "Easy") {
				numSquares=3;
			}
			else {
				numSquares=6;
			}
			reset();
		});
	}

}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//click listeners
		squares[i].addEventListener("click",function(){
			console.log(this.style.backgroundColor,pickedColor);
			if(this.style.backgroundColor===pickedColor)
			{

				messageDisplay.textContent="Correct!";
				changeColors(pickedColor);
				document.querySelector("h1").style.backgroundColor=pickedColor;
				resetbutton.textContent="Play Again?";

			}
			else{
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent="Try Again";
			}

		});
	}

} 

function reset()
{
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for (var i = 0; i < squares.length; i++) {
			if (colors[i]) 
			{
				squares[i].style.display="block";
				squares[i].style.backgroundColor=colors[i];
			}
			else squares[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetbutton.textContent="New colors";



}
// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;
// 	colors=generateRandomColor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none"	;
// 		} 
// 	}

// });


// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	colors=generateRandomColor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block"	;
// 	}

// });




resetbutton.addEventListener("click",reset);


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