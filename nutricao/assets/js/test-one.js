document.addEventListener("DOMContentLoaded", function () {
  var state = false,
    links = document.querySelectorAll(".navbar-responsive__link"),
    nav = document.querySelector(".navbar-responsive"),
    navIcon = document.querySelector("#nav-icon3");

  navIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    if (!state) {
      nav.style.transform = "translate3d(0,0,0)";
      state = true;
    } else {
      nav.style.transform = "translate3d(-100%,0,0)";
      state = false;
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!state) {
        nav.style.transform = "translate3d(0,0,0)";
        state = true;
      } else {
        nav.style.transform = "translate3d(-100%,0,0)";
        state = false;
      }
      navIcon.classList.remove("open");
    });
  });
});

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}