/*
 * @Author: laihaibo
 * @Date:   2016-05-31 00:14:43
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-31 01:04:42
 */

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

window.onload = function() {
  var time=null;
  var canvas = document.getElementById('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  var context = canvas.getContext('2d');
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

time = setInterval(function(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 520; i++) {
    var R = Math.random() * 3 + 3;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    x=checkOut(x,canvas.width,R,1);
    y=checkOut(y,canvas.height,R,1);
    var a = Math.random() * 360;
    var color = colors[Math.floor(Math.random()*colors.length)];
    drawStar(context, R * 0.618, R, x, y,1, color, color, a);
  }
},1);


}



function drawStar(cxt, r, R, x, y, borderWidth,borderColor, fillColor, rot) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {

    cxt.lineTo(Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y);
    cxt.lineTo(Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y);
    // cxt.lineTo(x,y);

  }
  cxt.closePath();

  cxt.lineWidth = borderWidth;
  cxt.strokeStyle = borderColor;
  cxt.fillStyle = fillColor;
  cxt.lineJoin = 'round';

  cxt.fill();
  cxt.stroke();
}

function checkOut(x,y,R,borderWidth) {
  if (x - R-borderWidth/2 < 0) {
    x = R+borderWidth/2;
  }
  if (x + R+borderWidth/2> y) {
    x = y - R-borderWidth/2;
  }
  return x;
}
