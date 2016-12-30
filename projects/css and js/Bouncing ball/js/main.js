var canvas = document.getElementById("gameCan");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var color = "#333";

var randomNumber = function(){
	return Math.floor(Math.random()*9)+1
} 


var randomColor = function(){
	color = "#"+randomNumber().toString()+randomNumber().toString()+randomNumber().toString()
	return color
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        color = randomColor()
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        color = randomColor()
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);
