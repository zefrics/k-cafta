function openPage(e, pageCode) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent"); // 탭컨텐트(실제 내용) 선택
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  } // 모든 탭컨텐트를 숨긴다

  tablinks = document.getElementsByClassName("tablinks"); // 탭링크(메뉴 하이라이트) 선택
  
  var parentTablinks = tablinks.parentNode;

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // 모든 탭링크를 끈다.

  document.getElementById(pageCode).style.display = "block"; // 클릭한 탭링크의 pageCode를 ID로 갖는 요소의 스타일을 block

  e.currentTarget.className += " active"; // 클릭한 탭링크 요소의 클래스에 active 추가

  e.currentTarget.parentNode.className += " active"; // 클릭한 탭링크 요소의 클래스에 active 추가
}
