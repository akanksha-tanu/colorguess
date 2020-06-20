var num=6;
var colors=generaterandomcolor(num);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	num=3;
	colors=generaterandomcolor(num);
	pickedcolor=pickcolor();
	colordisplay.textContent=colors[pickedcolor];
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
	}
});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	num=6;
	colors=generaterandomcolor(num);
	pickedcolor=pickcolor();
	colordisplay.textContent=colors[pickedcolor];
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

colordisplay.textContent=colors[pickedcolor];

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	//square click listener
	squares[i].addEventListener("click",function(){
		//grab color of picked square and compare
		var clickedcolor=this.style.backgroundColor;
		if (clickedcolor===colors[pickedcolor]){
			changecolor(clickedcolor);
			message.textContent="Correct!";
			reset.textContent="Play Again?";
			h1.style.backgroundColor=clickedcolor;
		}
		else{
			message.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}
	});
}
function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var ran=Math.floor(Math.random()*colors.length);
	return(ran);
}
function generaterandomcolor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
		//get random color and push in to array
	}
	return arr;
}
function randomcolor(){
	//random red
	var r=Math.floor(Math.random()*256);
	//random green
	var g=Math.floor(Math.random()*256);
	//random blue
	var b=Math.floor(Math.random()*256);
	//return that string of color
	return ("rgb("+ r +", "+ g +", "+ b +")");
}
reset.addEventListener("click",function(){
	//generate all new colors
	colors=generaterandomcolor(num);
	//pick a new random color
	pickedcolor=pickcolor();
	//change display color to match picked color
	colordisplay.textContent=colors[pickedcolor];
	this.textContent="New Colors";
	message.textContent="";
	//change color of all the squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})