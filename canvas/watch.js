/*
 * @Author: laihaibo
 * @Date:   2016-05-29 10:51:35
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-29 12:42:41
 */

const WINDOW_WIDTH = document.documentElement.clientWidth - 20;
const WINDOW_HEIGHT = document.documentElement.clientHeight - 20;
const MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
const MARGIN_TOP = Math.round(WINDOW_HEIGHT / 10);
const RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 216) - 1;
//const END = new Date('2016/6/6,8:30:00');
// var END = new Date();
// END.setTime(END.getTime()+3600*1000);
var currentTimeLeft = [];

var balls = [];
const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
console.log(colors.length);

window.onload = function() {

  // WINDOW_WIDTH=document.body.clientWidth;
  // WINDOW_HEIGHT = document.body.clientHeight;
  // MARGIN_LEFT = Math.round(WINDOW_WIDTH/100);
  // MARGIN_TOP = Math.round(WINDOW_HEIGHT/100);
  // RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  currentTimeLeft = getCurrentTimeLeft();
  var time = null;
  time = setInterval(function() {
    render(context);
    update();
  }, 50);
}

function getCurrentTimeLeft() {
  var now = new Date();
  var datebase = [];
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  datebase.push(year);
  datebase.push(month);
  datebase.push(day);
  datebase.push(hours);
  datebase.push(minutes);
  datebase.push(seconds);
  return datebase;
}

function update() {
  var nextTimeLeft = getCurrentTimeLeft();
  var nextHours = nextTimeLeft[3];
  var nextMinutes = nextTimeLeft[4];
  var nextSeconds = nextTimeLeft[5];

  var curHours = currentTimeLeft[3];
  var curMinutes = currentTimeLeft[4];
  var curSeconds = currentTimeLeft[5];

  if (nextSeconds != curSeconds) {
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curHours / 10));
    }
    if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
      addBalls(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curHours % 10));
    }
    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curMinutes / 10));
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(MARGIN_LEFT + 84 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curMinutes % 10));
    }
    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(MARGIN_LEFT + 108 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curSeconds / 10));
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(MARGIN_LEFT + 123 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(curSeconds % 10));
    }
    currentTimeLeft = nextTimeLeft;
  }

  updateBalls();
  console.log(balls.length);

}

function updateBalls() {

  for (var i = 0; i < balls.length; i++) {

    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;

    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y = WINDOW_HEIGHT - RADIUS;
      balls[i].vy = -balls[i].vy * (Math.random());
    }
  }
  var cnt = 0;
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
      balls[cnt++] = balls[i];
    }
  }
  while (balls.length > Math.min(512, cnt)) {
    balls.pop();
  }

}

function addBalls(x, y, num) {

  for (var i = 0; i < digit[num].length; i++)
    for (var j = 0; j < digit[num][i].length; j++)
      if (digit[num][i][j] == 1) {
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 0.98 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        }

        balls.push(aBall)
      }
}

function render(cxt) {
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  var year = currentTimeLeft[0];
  var month = currentTimeLeft[1];
  var day = currentTimeLeft[2];

  var hours = currentTimeLeft[3];
  var minutes = currentTimeLeft[4];
  var seconds = currentTimeLeft[5];
  var yearleft = parseInt(year / 100);
  var yearQian = parseInt(yearleft / 10);
  var yearBai = parseInt(yearleft % 10);
  var yearright = parseInt(year % 100);
  var yearShi = parseInt(yearright / 10);
  var yearGe = parseInt(yearright % 10);
  // var daysw = parseInt(days / 10000);
  // var daysq = parseInt((days - daysw * 10000) / 1000);
  // var daysb = parseInt((days - daysw * 10000 - daysq * 1000) / 100);
  // var dayss = parseInt((days - daysw * 10000 - daysq * 1000 - daysb * 100) / 10);
  // var daysg = parseInt(days % 10);

  //五位数的天数，可以计算到2289年
  renderDigit(MARGIN_LEFT, MARGIN_TOP, yearQian, cxt);
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, yearBai, cxt);
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, yearShi, cxt);
  renderDigit(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP, yearGe, cxt);
  renderDigit(MARGIN_LEFT + 60 * (RADIUS + 1), MARGIN_TOP, 13, cxt);

  renderDigit(MARGIN_LEFT + 81 * (RADIUS + 1), MARGIN_TOP, parseInt(month / 10), cxt);
  renderDigit(MARGIN_LEFT + 96 * (RADIUS + 1), MARGIN_TOP, parseInt(month % 10), cxt);
  renderDigit(MARGIN_LEFT + 111 * (RADIUS + 1), MARGIN_TOP, 12, cxt);

  renderDigit(MARGIN_LEFT + 132 * (RADIUS + 1), MARGIN_TOP, parseInt(day / 10), cxt);
  renderDigit(MARGIN_LEFT + 147 * (RADIUS + 1), MARGIN_TOP, parseInt(day % 10), cxt);
  renderDigit(MARGIN_LEFT + 162 * (RADIUS + 1), MARGIN_TOP, 14, cxt);

  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(hours / 10), cxt);
  renderDigit(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(hours % 10), cxt);
  renderDigit(MARGIN_LEFT + 60 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), 10, cxt);
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(minutes / 10), cxt);
  renderDigit(MARGIN_LEFT + 84 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(minutes % 10), cxt);
  renderDigit(MARGIN_LEFT + 99 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), 10, cxt);
  renderDigit(MARGIN_LEFT + 108 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(seconds / 10), cxt);
  renderDigit(MARGIN_LEFT + 123 * (RADIUS + 1), MARGIN_TOP + 24 * (RADIUS + 1), parseInt(seconds % 10), cxt);

  for (var i = 0; i < balls.length; i++) {
    cxt.fillStyle = balls[i].color;

    cxt.beginPath();
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
    cxt.closePath();

    cxt.fill();
  }
}

function renderDigit(x, y, num, cxt) {
  if (num == 10 || num == 11 || num == 12 || num == 13 || num == 14) {
    // cxt.fillStyle = '#EB4B4D';
    cxt.fillStyle = '#E77C2E';
  } else {
    cxt.fillStyle = '#36BEBF';
  }
  for (var i = 0; i < digit[num].length; i++)
    for (var j = 0; j < digit[num][i].length; j++)
      if (digit[num][i][j] == 1) {
        cxt.beginPath();
        cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
        cxt.closePath()

        cxt.fill()
      }
}
