//Slider

let panels = document.querySelectorAll('#slider .slides')

panels.forEach(slides => {
  slides.addEventListener('click', () =>{
    removeActiveClasses()
    slides.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(slides => {
    slides.classList.remove('active')
  })
}

//Tab

function openDiv(e, divName) {
  
  // tablink = document.getElementsByClassName("link1");
  // 선택하는 부분
  let tablink = document.querySelectorAll("#tab .sub");

  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }


  // tabcontent = document.getElementsByClassName("tab1");
  // 이미지가 나타나는 부분
  let tabcontent = document.querySelectorAll("#tab .slides");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    // tabcontent[i].style.display = "none";
  }


  document.getElementById(divName).className += " active";
  e.currentTarget.className += " active";
}