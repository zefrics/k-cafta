function menuDrop(e) {
  var current = e.currentTarget; // 선택한 것
  var parent = current.parentNode; // 선택한 것의 부모 Node
  var target = parent.getElementsByClassName("menu-drop"); // 부모 Node의 자손들 중 "menu-drop"를 갖는 요소
  var menudrops = document.getElementsByClassName("menu-drop"); // 문서 전체에서 "menu-drop"를 갖는 요소

  // 1. 만약 target의 클래스에 hide가 있다면 -> menudrops 숨긴 후, target에 hide 삭제

  // 2. 만약 target의 클래스에 hide가 없다면 -> menudrops 숨기기 (또는 target 숨기기)
  
  if (target[0].classList.contains("hide") == true) {
    for (i = 0; i < menudrops.length; i++) {
      menudrops[i].classList.add('hide');
    }
    target[0].classList.remove("hide") // 해당 "menu-drop" 보이기
  } else {
    target[0].classList.add("hide") // 해당 "menu-drop" 숨기기
  }
}

// 3. 만약 Title, menudrops 제외 어디든 클릭 시 -> menu-drop 숨기기
window.onclick = function(e) {
  if (!e.target.matches('.btn-menu-drop,.menu-drop')) {
    var menudrops = document.getElementsByClassName("menu-drop");
    for (i = 0; i < menudrops.length; i++) {
      menudrops[i].classList.add('hide');
    }
  }
}