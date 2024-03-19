var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 100,
    y = 100,
    innerRadius = 10,
    outerRadius = 100,
    radius = 180;

var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");

ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();