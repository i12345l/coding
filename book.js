var image_list = new Array("image/도서/조윤성 인공지능을 위한 수학.jpg","image/도서/김서현 처음 배우는 암호화.jpg","image/도서/박용재 꿈꾸는 인공지능.jpg","image/도서/박재홍 AI 시대 행복해질 용기.jpg","image/도서/심경은 로봇 시대 인간의 일.jpg","image/도서/신성빈 데이터 분석의 모든 것.jpg","image/도서/이진혁 누가 인공지능을 두려워하나.jpg","image/도서/박충훈 우리에게 IT란 무엇인가.jpg","image/도서/신도윤 비밀의 언어.jpg","image/도서/최영우 한 권으로 읽는 컴퓨터 구조와 프로그래밍.jpg","image/도서/이두진 알고리즘 라이프.jpg")
var text_list = new Array("2124 조윤성\n“인공지능을 위한 수학”이라는 책을 읽으며 인공지능과 프로그래밍 분야에 활용되는 수학적 기초를 다짐. NLU와 딥러닝, 이미지 분석 등 AI에 실제로 수학이 사용되는 예시들을 배우고, 그 중 자연어 처리와 관련된 내용을 실제로 어떠한 과정을 거쳐서 활용할 수 있는지를 동아리원들에게 발표하며 앞으로의 계획을 말함. 영어 시간에 인공지능 챗봇과 관련된 내용을 조사하고 발표하면서 자연어 처리 분야에 대해서 추가 조사를 하고 싶다는 계획이 있었는데, 책을 읽으면서 평소 하는 프로그래밍과 멀다고 느낀 구체적인 인공지능 구현에 대해 배울 수 있어서 좋았고, 관심 분야를 발표하면서 관련 내용에 대해서 더 잘 알게 됨. 최근 인공지능 특강을 통해서 파이썬을 통한 인공지능 구현과 Orange3 프로그램을 통한 인공지능 활용에 대해서도 배웠는데, 앞으로도 기초적인 구현과 실질적인 활용을 공부해나가며 인공지능을 필요한 분야에 잘 활용할 수 있는 능력을 기르고 싶음.","김서현의 처음 배우는 암호화 독서 보고서","박용재의 꿈꾸는 인공지능 독서 보고서",
"박재홍의 AI 시대 행복해질 용기 독서 보고서",
"심경은의 로봇 시대 인간의 일 독서 보고서",
"신성빈의 데이터 분석의 모든 것 독서 보고서",
"이진혁의 누가 인공지능을 두려워하나 독서 보고서",
"박충훈의 우리에게 IT란 무엇인가 독서 보고서",
"신도윤의 비밀의 언어 독서 보고서",
"최영우의 한 권으로 읽는 컴퓨터 구조와 프로그래밍 독서 보고서",
"이두진의 알고리즘 라이트 독서 보고서")

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