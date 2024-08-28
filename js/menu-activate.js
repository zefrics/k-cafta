// 만약 url에 home이 있으면 -> id="p-home"의 클래스에 active추가
// 만약 url에 2-1이 있으면 -> id="p-2","p-2-1"의 클래스에 active추가

var current = window.location.pathname //ex. "/2-1.html"
var extract1 = current.replace("/","").replace(".html","") //ex. "2-1"
var extract2 = extract1.charAt(0) // 첫글자만 가져오기 ex. "2"

document.getElementById("p-"+extract1).classList.add('active')

if (document.getElementById("p-"+extract2)) {
  document.getElementById("p-"+extract2).classList.add('active')
} // 만약 해당 ID가 존재한다면 (상위 타이틀이 있다면), 이것도 활성화