function bookZoomIn(event, n) {
    event.target.style.zIndex = 1;
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "all 0.5s";
    event.target.style.animation = "fadeout_s 0.5s";
    event.target.style.opacity = "0.5";
  }
  
function bookZoomOut(event) {
    event.target.style.zIndex = 0;
    event.target.style.opacity = "1";
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "all 0.5s";
    event.target.style.animation = "fadein_s 0.5s";
}

function BookClickOn(event){
    document.getElementById("modal").style.animation="fadein 0.3s";
    document.getElementById("modal").style.display="block";
}
function BookClickOff(event){
    document.getElementById("modal").style.display="none";
}

/*
$(function(){ 
    $("button").click(function(){
    });
    $(".modal_content").click(function(){
      $(".modal").fadeOut();
    });
});*/