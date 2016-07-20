/*
 * @Author: laihaibo
 * @Date:   2016-04-30 19:44:18
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-07-20 15:16:57
 */

//获取属性值
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, false)[attr];
  }
}

function startMove(obj, json, fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var flag = true;//假设有三个json的key/value值,这三个值中只要有一个没有达到目标值,flag就等于false.如果定义在了for-in外面，而因为json中的属性无法同一时间运动到目标值，所以flag的值在前面的过程一定会变为false。变为false之后，当所有的属性值都运动到目标值也没有语句使它变为true，所以fn()不会执行，就无法关闭定时器和执行下一个函数了。
    for (var attr in json) {
      var icurrnet = 0;
      if (attr == 'opacity') {
        icurrnet = Math.round(parseFloat(getStyle(obj, attr)) * 100);
      } else {
        icurrnet = parseInt(getStyle(obj, attr));
      }

      var speed = (json[attr] - icurrnet) / 10;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (icurrnet != json[attr]) {
        flag = false;
      }
      if (attr == 'opacity') {
        obj.style.opacity = (icurrnet + speed) / 100;
      } else {
        obj.style[attr] = icurrnet + speed + 'px';
        obj.style.fontSize = parseInt(getStyle(obj, 'fontSize')) + speed + 'px';
      }

      //进行链式调用
      if (flag) {
        clearInterval(obj.timer);
        if (fn) {
          fn();
        }
      }
    }
  }, 20)
}
