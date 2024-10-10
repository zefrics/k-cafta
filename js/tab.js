function openCompany(e, companyName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hide");
  }

  // Get all elements with class="btn-tab" and remove the class "active"
  tablinks = document.getElementsByClassName("btn-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  var element = document.getElementById(companyName);

  // element.style.display = "block";
  element.classList.remove("hide");
  e.currentTarget.classList.add("active");

  var headerOffset = 60; // Height of (Menu + Sticky)
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}