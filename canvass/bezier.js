/*
* @Author: laihaibo
* @Date:   2016-05-31 21:13:08
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-06-01 14:33:24
*/

window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext('2d');

    //drawBezier(context,100,100,145,200,300,300);
    context.font = 'italic bold 40px Microsoft Yahei';
    context.shadowColor = 'gray';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.fillStyle = '#058';
    context.fillText('Hello Canvas!',100,100);


}

function drawBezier(ctx,x0,y0,x1,y1,x2,y2){
  ctx.save();
  // ctx.translate(x, y);

  bezierPath(ctx,x0,y0,x1,y1,x2,y2);


  ctx.lineWidth = 5;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'yellow';

  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function bezierPath(ctx,x0,y0,x1,y1,x2,y2){
  ctx.beginPath();

  ctx.moveTo(x0,y0);
  ctx.quadraticCurveTo(x1,y1,x2,y2);

  // ctx.closePath();
}
