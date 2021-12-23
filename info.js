var infoImg = new Array("image/인포그래픽/비트코인 1짤.png","image/인포그래픽/딥페이크/딥페이크 한짤.png","image/인포그래픽/0001.jpg");
var infoTxt = new Array("'블록'이라 하는 소규모 데이터들이 p2p 방식을 기반으로 생성된 체인 형태의 연결고리 기반 분산 데이터를 저장 환경에 저장하여 누구라도 임의로 수정할 수 없고 누구나 변경의 결과를 열람할 수 있는 분산 컴퓨팅 기술 기반의 원장 관리 기술장점 - 개인정보를 요구하지 않고 제 3자 없이 거래가 가능해 불필요한 수수료를 절감할 수 있다. 일부 시스템에 성능 저하가 발생해도 전체가 받는 영향은 적으며 메타버스의 가상화폐를 현실의 화폐와 교환하게 해주는 핵심 기술이다.단점 - 단일 주체가 50% 이상을 소유할 경우 문제가 생길 수 있고 아직은 기술이 미흡하다. 불법 거래, 대금 결제, 비자금 조성, 탈세의 위험이 있고 완벽한 익명성 보장이 어려울 수 있다. 개인키의 해킹, 분실 등의 경우 일반적으로 해결방법이 없다.",
"딥페이크 - 실제처럼 보이나 인공지능을 사용하여 조작한 가짜 비디오, 사진, 오디오 등을 뜻한다. 딥페이크 원리 - GAN(생성적 적대 신경망)의 두 신경망 모델의 적대적 관계를 이용한다. 생성자 모델은 딥러닝을 통해 실제 데이터를 학습하고 생성한 거짓 데이터를 감별자가 실제인지 거짓인지 판별하도록 학습한다. 이러한 딥페이크는 디지털 성범죄 등 다양한 악용 사례가 발생한다. 이 때문에 국내 기업에서 딥페이크를 탐지하는 \'Detectdeepfake.ai\'를 출시하고 페이스북과 구글 등에서도 딥페이크 차단에 대한 기술을 개발했다",
"인공지능 면접이란 면접관과 면접 대상자의 대화에서 인공지능 면접관과 면접대상자의 대화로 마이크 기능이 탑재된 이어폰을 착용한 채로 면접을 진행하고 캠을 활용하여 본인의 모습이 나오는 것을 확인할 수 있다. 인공지능 면접의 단점 - 입사하는 사람의 다양성이 떨어지고 지원자를 파악하는 것이 매우 제한적이다. 추가 질문 등을 통해 지원자를 파악하기 어려워 형식적인 방식으로 진행된다. 인공지능 차별 사례 - 미인대회의 '객관적' 외모평가를 위해 심사에 투입된 인공지능은 수상자 대부분을 백인으로 뽑았다. 미인 판단 학습에 사용된 사진은 거의 백인이었기 때문에 백인 사진 인식 에러 확률이 1\% 내외, 흑인 사진의 경우 최고 35\%에 달했다. 비대면 면접 선호자들 - 코로나와 같은 질병 등의 위험이 발생할 때 비대면 면접을 선호하는 사람들이 더 많다는 것이 확인되었다. 인공지능 면접이 마냥 부정적인 것만은 아니기에 상황에 맞추어 활용한다면 많은 효과를 발휘할 수 있을 것이다");
var tog = new Array(0,0,0);
var infoTxtT = new Array("블록 체인", "딥페이크", "인공지능 면접");
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
  document.getElementById("campaign_detail").style.marginTop = "15px";
  document.getElementById("campaign_detail").style.padding = "30px 0px";
  document.getElementById("campaign_detail").style.visibility = "visible";
  document.getElementById("campaign_detail").style.height = "650px";

  var x=document.getElementsByClassName("campaign_in");
  for(var i=0; i<x.length; i++){
    x[i].style.animation="fadein 1s";
    x[i].style.opacity="1";
    x[i].style.zIndex="0";
  }
  document.getElementById("c_texts").style.zIndex="0";
  document.getElementById("c_detail_img").src=infoImg[n];
  document.getElementById("c_detail_text").innerText=infoTxt[n];
  document.getElementById("c_detail_t").innerText=infoTxtT[n];
}

function infoClickOff(event){
  var x=document.getElementsByClassName("campaign_in");
  for(var i=0; i<x.length; i++){
    x[i].style.animation="fadeout 0.5s";
    x[i].style.opacity="0";
  }
  document.getElementById("c_texts").style.zIndex="-1";
  document.getElementById("campaign_detail").style.marginTop = "0px";
  document.getElementById("campaign_detail").style.padding = "0px 0px";
  document.getElementById("campaign_detail").style.visibility = "hidden";
  document.getElementById("campaign_detail").style.height = "0px";
}