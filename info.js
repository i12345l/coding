var infoImg = new Array("image/인포그래픽/비트코인 1짤.png","image/인포그래픽/딥페이크/딥페이크 한짤.png","image/인포그래픽/0001.jpg");
var infoTxt = new Array("블록체인 및 암호화폐를 주제로 모둠을 구성해 기본 개념 및 장단점에 대한 자료를 찾고 정리했다. 카드 뉴스를 제작하고 동아리 SNS 계정에 게시했다.",
"“딥 페이크”의 원리를 조사하여 현재 사용되고 있는 사례등을 조사하여 제시함. 딥 페이크 기술의 악용사례등을 조사하여 부정적인 면도 조사하고, 이롭게 사용되는 사례등도 조사하여 제시하였다.",
"인공지능 면접에 대해서 조사함.인공지능 차별 사례에 대해 조사한 후 보고서를 작성하고, 학교에 걸어둠.");
var tog = new Array(0,0,0);
var inf_img = new Array("info_img1", "info_img2", "info_img3");

window.onload = function start(){
  document.getElementById(inf_img[1]).style.opacity="0.5";
  document.getElementById(inf_img[2]).style.opacity="0.5";
  document.getElementById(inf_img[0]).click();
}

function goTog(event, n){
  if(tog[n]==0){
    infoClickOff(event);
    tog[0]=0;tog[1]=0;tog[2]=0;
    infoZoomOut(event, 0);infoZoomOut(event, 1);infoZoomOut(event, 2);
    infoZoomIn(event, n);
    infoClickOn(event, n);
    tog[n]=1;
  }else{
    tog[n]=0;
    infoClickOff(event);
    infoZoomOut(event);
  }
}


function infoZoomIn(event, n) {
  document.getElementById(inf_img[n]).style.zIndex = 1;
  document.getElementById(inf_img[n]).style.transform = "scale(1.2)";
  document.getElementById(inf_img[n]).style.transition = "all 0.5s";
  document.getElementById(inf_img[n]).style.animation = "fadein_s 0.5s";
  document.getElementById(inf_img[n]).style.opacity = "1";
  for(var i=1; i<3; i++){
    document.getElementById(inf_img[(n+i)%3]).style.zIndex = 0;
    document.getElementById(inf_img[(n+i)%3]).style.opacity = "0.5";
    document.getElementById(inf_img[(n+i)%3]).style.transform = "scale(1)";
    document.getElementById(inf_img[(n+i)%3]).style.transition = "all 0.5s";
    document.getElementById(inf_img[(n+i)%3]).style.animation = "fadeout_s 0.5s";
  }
}

function infoZoomOut(event, n) {
  if(tog[n]==0){
    document.getElementById(inf_img[n]).style.zIndex = 0;
    document.getElementById(inf_img[n]).style.opacity = "0.5";
    document.getElementById(inf_img[n]).style.transform = "scale(1)";
    document.getElementById(inf_img[n]).style.transition = "all 0.5s";
    document.getElementById(inf_img[n]).style.animation = "fadeout_s 0.5s";
  }
  for(var i=1; i<3; i++){
    if(tog[(n+i)%3]==1){
      document.getElementById(inf_img[(n+i)%3]).style.zIndex = 1;
      document.getElementById(inf_img[(n+i)%3]).style.transform = "scale(1.2)";
      document.getElementById(inf_img[(n+i)%3]).style.transition = "all 0.5s";
      document.getElementById(inf_img[(n+i)%3]).style.animation = "fadein_s 0.5s";
      document.getElementById(inf_img[(n+i)%3]).style.opacity = "1";
    }
  }
}

function infoClickOn(event, n){
  document.getElementById("campaign_detail").style.margin = "15px 0px";
  document.getElementById("campaign_detail").style.padding = "30px 0px";
  document.getElementById("campaign_detail").style.visibility = "visible";
  document.getElementById("campaign_detail").style.height = "80vh";

  var x=document.getElementsByClassName("campaign_in");
  for(var i=0; i<x.length; i++){
    x[i].style.animation="fadein 1s";
  }
  document.getElementById("c_detail_img").src=infoImg[n];
  document.getElementById("c_detail_text").innerText=infoTxt[n];
}

function infoClickOff(event){
  var x=document.getElementsByClassName("campaign_in");
  for(var i=0; i<x.length; i++){
    x[i].style.animation="fadeout 0.3s";
  }
  document.getElementById("campaign_detail").style.margin = "0px 0px";
  document.getElementById("campaign_detail").style.padding = "0px 0px";
  document.getElementById("campaign_detail").style.visibility = "hidden";
  document.getElementById("campaign_detail").style.height = "0vh";
}