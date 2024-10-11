function myToggle() {
  var target = document.getElementById("my-menu");
  target.classList.toggle('hide');
}

function toTop() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}