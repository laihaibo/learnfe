/*
* @Author: laihaibo
* @Date:   2016-05-31 10:01:05
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-05-31 11:14:51
*/

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
window.onload = function() {
  var time=null;
  var canvas = document.getElementById('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  var context = canvas.getContext('2d');
  // context.save();
  // context.fillStyle = 'red';
  // context.translate(100,100);
  // context.fillRect(0, 0, 400, 400);
  // context.restore();

  // context.save();
  // context.fillStyle = 'rgba(255,255,0,0.618)';
  // context.translate(200,200);
  // context.fillRect(0, 0, 400, 400);
  // context.restore();



time = setInterval(function(){
    context.clearRect(0,0,canvas.width,canvas.height);
    // var linearGrad=context.createLinearGradient(0,0,0,canvas.height);
    // linearGrad.addColorStop(0.0,'#000');
    // linearGrad.addColorStop(1.0,'#035')
    // context.fillStyle = linearGrad;
    var backgroundImage = new Image();
    backgroundImage.src='../img/boshao.jpg';
    // backgroundImage.onload=function(){
      var pattern = context.createPattern(backgroundImage,'repeat');
      context.fillStyle=pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
    // }
context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 520; i++) {
    var R = Math.random() * 3 + 3;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height*0.65;
    x=checkOut(x,canvas.width,R,1);
    y=checkOut(y,canvas.height,R,1);
    var a = Math.random() * 360;
    var color = colors[Math.floor(Math.random()*colors.length)];
    drawStar(context, R * 0.618, R, x, y,1, color, color, a);
  }
},1000);

}



function drawStar(cxt, r, R, x, y, borderWidth,borderColor, fillColor, rot) {

  cxt.save();
  cxt.translate(x,y);
  cxt.rotate(rot/180*Math.PI);
  cxt.scale(R/r,R/r);
  drawSpot(cxt,R,r);

 cxt.fillStyle = fillColor;
  cxt.lineWidth = borderWidth;
  cxt.strokeStyle = borderColor;
  cxt.lineJoin = 'round';

  cxt.fill();
  cxt.stroke();

  cxt.restore();
}

function drawSpot(cxt,R,r){
    cxt.beginPath();
  for (var i = 0; i < 5; i++) {

    cxt.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * R , -Math.sin((18 + i * 72) / 180 * Math.PI) * R );
    cxt.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * r , -Math.sin((54 + i * 72) / 180 * Math.PI) * r );
    // cxt.lineTo(x,y);

  }
  cxt.closePath();
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
