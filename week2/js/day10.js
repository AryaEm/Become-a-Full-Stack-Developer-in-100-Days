var c = document.getElementById('canvas');
var ctx = c.getContext ('2d');
ctx.beginPath ();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"cadetblue");
grd.addColorStop(1,"white");

ctx.fillStyle = grd;
ctx.fillRect(10,10,200,80);
