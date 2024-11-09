// 만약 url에 index이 있으면 -> id="p-index"의 클래스에 active추가
// 만약 url에 2-1이 있으면 -> id="p-2","p-2-1"의 클래스에 active추가

var current = window.location.href //ex. "http://www.naver.com/2-2-1_en.html"
var lastItem = current.substring(current.lastIndexOf('/') + 1) //ex. 2-2-1_en.html 

var extract1 = lastItem.replace("/","").replace(".html","") //ex. "2-2-1"
var extract2 = extract1.substring(0, 3) // 첫 세글자만 가져오기 ex. "2-2"
var extract3 = extract1.substring(0, 1) // 첫 글자만 가져오기 ex. "2"

if (document.getElementById("p-"+extract1)) {
  document.getElementById("p-"+extract1).classList.add('active')
} // 2-2-1 페이지 접속 시, 2-2-1가 있으면 켜준다.

if (document.getElementById("p-"+extract2)) {
  document.getElementById("p-"+extract2).classList.add('active')
} // 2-2-1 페이지 접속 시, 2-2가 있으면 켜준다.

if (document.getElementById("p-"+extract3)) {
  document.getElementById("p-"+extract3).classList.add('active')
} // 2-2-1 페이지 접속 시, 2가 있으면 켜준다.

if (lastItem == '') {
  document.getElementById("p-index").classList.add('active')
} // 만약 비어있으면, p-index를 켜준다.