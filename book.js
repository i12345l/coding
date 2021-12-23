var image_list = new Array("image/도서/조윤성 인공지능을 위한 수학.jpg","image/도서/김서현 처음 배우는 암호화.jpg","image/도서/박용재 꿈꾸는 인공지능.jpg","image/도서/박재홍 AI 시대 행복해질 용기.jpg","image/도서/심경은 로봇 시대 인간의 일.jpg","image/도서/신성빈 데이터 분석의 모든 것.jpg","image/도서/이진혁 누가 인공지능을 두려워하나.jpg","image/도서/박충훈 우리에게 IT란 무엇인가.jpg","image/도서/신도윤 비밀의 언어.jpg","image/도서/최영우 한 권으로 읽는 컴퓨터 구조와 프로그래밍.jpg","image/도서/이두진 알고리즘 라이프.jpg")
var text_list = new Array("조윤성의 인공지능을 위한 수학 독서 보고서","김서현의 처음 배우는 암호화 독서 보고서","박용재의 꿈꾸는 인공지능 독서 보고서","박재홍의 AI 시대 행복해질 용기 독서 보고서","심경은의 로봇 시대 인간의 일 독서 보고서","신성빈의 데이터 분석의 모든 것 독서 보고서","이진혁의 누가 인공지능을 두려워하나 독서 보고서","박충훈의 우리에게 IT란 무엇인가 독서 보고서","신도윤의 비밀의 언어 독서 보고서","최영우의 한 권으로 읽는 컴퓨터 구조와 프로그래밍 독서 보고서","이두진의 알고리즘 라이트 독서 보고서")

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