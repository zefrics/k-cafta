// 메뉴 드롭다운

function dropDown(e) {
  var current = e.currentTarget; // 선택한 것
  var parent = current.parentNode; // 선택한 것의 부모 Node
  var target = parent.getElementsByClassName("dropdown-group"); // 부모 Node의 자손들 중 "dropdown-group"를 갖는 요소
  var dropdowns = document.getElementsByClassName("dropdown-group"); // 문서 전체에서 "dropdown-group"를 갖는 요소

  // 1. 만약 target의 클래스에 show가 없다면 -> dropdowns 비활성화 시킨 후, target에 show 추가
  // 2. 만약 target의 클래스에 show가 있다면 -> dropdowns 비활성화 (또는 target비활성화)
  
  if (target[0].classList.contains("show") == false) {
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
    target[0].classList.add("show") // 해당 "dropdown-group" 보이기
  } else {
    target[0].classList.remove("show") // 해당 "dropdown-group" 숨기기
  }
}

// 3. 만약 Title, Dropdown-group 제외 어디든 클릭 시 -> Dropdown-group 비활성화
window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn,.dropdown-group')) {
    var dropdowns = document.getElementsByClassName("dropdown-group");
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
}