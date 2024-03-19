var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
console.log(canvas);

c.beginPath();
c.moveTo(0,0);
c.lineTo(200,100);
c.stroke();
c.moveTo(0,100);
c.lineTo(200,0);
c.stroke();