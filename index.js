var img1 = new Image();
img1.src = "image/신성빈 발표.jpg";

var img2 = new Image();
img2.src = "image/인공지능 특강.jpg";

var img3 = new Image();
img3.src = "image/CODING_LOGO.png"; 

var maxLoops = 3; // 총 이미지의 갯수입니다. 윗부분에  var img 들의 마지막 숫자가 같아야 합니다.
var bInterval = 2000; // 전환시 잠깐 멈춰있는 시간수치입니다
var count = 2;
function init() {
blendtrjs.filters.blendTrans.apply();
document.images.blendtrjs.src = eval("img"+count+".src");
blendtrjs.filters.blendTrans.play();
if (count < maxLoops) {
count++;
}
else {
count = 1;
}
setTimeout("init()", bInterval*700+2000);
}

function zoomIn(event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}