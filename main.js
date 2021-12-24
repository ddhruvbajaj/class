var mouseEvent="empty";
var last_position_X,last_position_Y;
color="black";
width=3;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mouseDown",mousedown);
function mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width

console.log("lastpositionofxandy=");
console.log("x=" +last_position_X +"y=" +last_position_Y);
ctx.moveTo(last_position_X,last_position_Y);

console.log("currentpositionofxandy=");
console.log("x=" +currentpositionofx +"y=" +currentpositionofy);
ctx.lineTo(currentpositionofx,currentpositionofy);
ctx.stroke()
}
last_position_X=currentpositionofx;
last_position_Y=currentpositionofy;
}

canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
    mouseEvent="mouseleave";
}