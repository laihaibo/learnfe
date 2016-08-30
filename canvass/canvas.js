/*
 * @Author: laihaibo
 * @Date:   2016-05-30 21:18:58
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-31 00:13:35
 */

window.onload = function() {
  console.log(0.5*Math.pow(3,0.5));
  var flag = Math.pow(-1,Math.ceil(Math.random()*1000));
  console.log(flag);
  var canvas = document.getElementById('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  var context = canvas.getContext('2d');

  // context.beginPath();
  // context.moveTo(222, 222);
  // context.lineTo(222, 333);
  // context.lineTo(333, 333);
  // context.lineTo(777, 111);
  // context.closePath();

  // context.lineWidth = 5;
  // context.lineCap='square';
  // context.fillStyle = 'rebeccapurple'
  // context.strokeStyle = 'salmon';


  // context.fill();
  // context.stroke();

   drawRect(context, 111, 111, 444, 444, 0, 'red', 'red');
  // drawRect(context, 444, 444, 222, 222, 10, 'red', 'rgba(222,111,222,0.618)');
   drawStar(context,40,100,333,320,10,'yellow','yellow',0);
  // drawHexagon(context,61.8,100,333,333,10,'yellow','red',0);
  // drawHexagon(context,61.8,100,483,419.60,10,'yellow','red',0);
  // drawHexagon(context,61.8,100,333,333,7,'yellow','yellow',0);

  // var change = caculate(100,333,333);
  // drawHexagon(context,61.8,100,333+change[0],333+change[1],7,'yellow','yellow',0);

  // drawHexagon(context,61.8,100,333+change[0]*2,333,7,'yellow','yellow',0);
}

//矩形
function drawRect(cxt, x, y, width, height, borderWidth, borderColor, fillColor) {
  cxt.beginPath();
  cxt.rect(x, y, width, height);
  cxt.closePath();

  cxt.lineWidth = borderWidth;
  cxt.strokeStyle = borderColor;
  cxt.fillStyle = fillColor;

  cxt.fill();
  cxt.stroke();
}
//五角星
function drawStar(cxt,r,R,x,y,borderWidth, borderColor, fillColor,rot){
  cxt.beginPath();
  for(var i =0;i<5;i++){

    cxt.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,-Math.sin((18+i*72-rot)/180*Math.PI)*R+y);
    cxt.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+x,-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
    // cxt.lineTo(x,y);

  }
  cxt.closePath();

  cxt.lineWidth = borderWidth;
  cxt.strokeStyle = borderColor;
  cxt.fillStyle = fillColor;

  cxt.fill();
  cxt.stroke();
}
//六边形
function drawHexagon(cxt,r,R,x,y,borderWidth,borderColor,fillColor,rot){
  cxt.beginPath();
  for (var i = 0; i < 6; i++) {
    cxt.lineTo(Math.cos((30+i*60-rot)/180*Math.PI)*R+x,-Math.sin((30+i*60-rot)/180*Math.PI)*R+y);
    cxt.lineTo(Math.cos((60+i*60-rot)/180*Math.PI)*r+x,-Math.sin((60+i*60-rot)/180*Math.PI)*r+y);
  }
  cxt.closePath();
  cxt.lineWidth=borderWidth;
  cxt.strokeStyle=borderColor;
  cxt.fillStyle=fillColor;

  cxt.fill();
  cxt.stroke();
}

function caculate(R,x,y){
  var cacu=[];
      x = 0.5*Math.pow(3,0.5)*R;
      y = 1.5*R;
      cacu.push(x);
      cacu.push(y);
      return cacu;

}


