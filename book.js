var image_list = new Array("image/도서/조윤성 인공지능을 위한 수학.jpg","image/도서/김서현 처음 배우는 암호화.jpg")
var text_list = new Array("조윤성의 인공지능을 위한 수학 독서 보고서","김서현의 처음 배우는 암호화 독서 보고서")

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

function BookClickOn(event, n){
    document.getElementById("Book_img").src=image_list[n];
    document.getElementById("Book_Text").innerText=text_list[n];
    var modal=document.getElementsByClassName("Book_Modal");
    for(var i=0; i<modal.length; i++){
        modal[i].style.animation="fadein 0.3s";
        modal[i].style.display="block";
    }
}

function BookClickOff(event){
    var modal=document.getElementsByClassName("Book_Modal");
    for(var i=0; i<modal.length; i++){
        modal[i].style.display="none";
    }
}