/*
* @Author: laihaibo
* @Date:   2016-06-01 14:35:25
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-06-01 16:35:49
*/

const WINDOW_WIDTH = document.documentElement.clientWidth-20;
const WINDOW_HEIGHT = document.documentElement.clientHeight-20;
var balls = [];
var time = null;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
window.onload = function() {
    // var canvas = document.getElementById('canvas');
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    // var context = canvas.getContext('2d');

    //context.globalAlpha = 0.7;
    //context.globalCompositeOperation = 'lighter';

    for (var i = 0; i < 100; i++) {
      var R = Math.floor(Math.random()*255);
      var G = Math.floor(Math.random()*255);
      var B = Math.floor(Math.random()*255);
      //var a = Math.random();
      var radius= Math.random() *50+20;

      //context.fillStyle = 'rgba('+R+','+G+','+B+','+a+')';

      aBall = {
        color:'rgb('+R+','+G+','+B+')',
        radius:radius,
        x:Math.random()*(canvas.width-2*radius)+radius,
        y:Math.random()*(canvas.height-2*radius)+radius,
        vx:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),
        vy:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),
      }

      balls[i]=aBall;
}
  time=setInterval(function(){
    draw();
    update(canvas.width,canvas.height);
  },50);
  // draw();
  canvas.addEventListener('mousemove',detect);
}

function draw(x,y){
  //    var canvas = cxt.canvas;
  context.globalCompositeOperation = 'lighter';
  context.clearRect(0,0,canvas.width,canvas.height);
  for(var i=0;i<balls.length;i++){
    context.fillStyle=balls[i].color;
    //context.save();
    context.beginPath();
    context.arc(balls[i].x,balls[i].y,balls[i].radius,0,2*Math.PI);
          context.closePath();

    if(context.isPointInPath(x,y)){
      context.fillStyle='red';


  }
        context.fill();
      //cxt.restore();
  }
}

function update(canvasWidth,canvasHeight){
  for (var i = 0; i < balls.length; i++) {
    balls[i].x+=balls[i].vx;
    balls[i].y+=balls[i].vy;

    if(balls[i].x-balls[i].radius<=0){
      balls[i].vx=-balls[i].vx;
      balls[i].x = balls[i].radius;
    }
    if(balls[i].x+balls[i].radius>=canvasWidth){
      balls[i].vx=-balls[i].vx;
      balls[i].x =canvasWidth- balls[i].radius;
    }
    if(balls[i].y-balls[i].radius<=0){
      balls[i].vy=-balls[i].vy;
      balls[i].y = balls[i].radius;
    }
    if(balls[i].y+balls[i].radius>=canvasHeight){
      balls[i].vy=-balls[i].vy;
      balls[i].y =canvasHeight- balls[i].radius;
    }
  }
}

function detect(event){
  var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;
  draw(x,y);


}
