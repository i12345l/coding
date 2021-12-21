function infoZoomIn(event, n) {
  document.getElementById("campaign_detail").style.visibility = "visible";
  document.getElementById("campaign_detail").style.height = "30vh";
  event.target.style.zIndex = 1;
  event.target.style.transform = "scale(1.2)";
  event.target.style.transition = "all 0.5s";
}

function infoZoomOut(event) {
  document.getElementById("campaign_detail").style.visibility = "hidden";
  document.getElementById("campaign_detail").style.height = "0vh";
  event.target.style.zIndex = 0;
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "all 0.5s";
}