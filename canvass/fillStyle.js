/*
 * @Author: laihaibo
 * @Date:   2016-05-31 10:39:36
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-31 21:02:37
 */

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext('2d');

    drawRoundRect(context, 110, 110, 540, 540, 10, 5, 'yellow', 'red');
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
          drawRoundRect(context, 130+i*130, 130+j*130, 110, 110, 6, 5, 'yellow', 'red');
        }
       }

  }
  //圆角矩形
function drawRoundRect(ctx, x, y, width, height, radius, borderWidth, borderColor, fillColor) {

  if(2*radius>width || 2*radius>height){
    return ;
  }

  ctx.save();
  ctx.translate(x, y);

  roundRectPath(ctx, width, height, radius);
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = fillColor;

  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function roundRectPath(ctx, width, height, radius) {
  ctx.beginPath();

  ctx.arc(radius, radius, radius, 1 * Math.PI, 1.5 * Math.PI);
  ctx.lineTo(width - radius, 0);
  ctx.arc(width - radius, radius, radius, 1.5 * Math.PI, 2 * Math.PI);
  ctx.lineTo(width, height - radius);
  ctx.arc(width - radius, height - radius, radius, 0 * Math.PI, 0.5 * Math.PI);
  ctx.lineTo(radius, height);
  ctx.arc(radius, height - radius, radius, 0.5 * Math.PI, 1 * Math.PI);

  ctx.closePath();
}
