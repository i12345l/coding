function zoomIn(event) {
  event.target.style.zIndex = 1;
  event.target.style.transform = "scale(1.2)";
  event.target.style.transition = "all 0.5s";
  console.log(1);
}

function zoomOut(event) {
  event.target.style.zIndex = 0;
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "all 0.5s";
  console.log(-1);
}