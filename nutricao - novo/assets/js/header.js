document.addEventListener("DOMContentLoaded", function () {
  var state = false,
    cabecalhoItemResponsivo = document.querySelectorAll(".cabecalho-item_responsivo"),
    nav = document.querySelector(".cabecalho-navegacao_responsivo"),
    containerHamburguer = document.querySelector("#container-hamburguer");

  containerHamburguer.addEventListener("click", function () {
    this.classList.toggle("open");
    if (!state) {
      nav.style.transform = "translate3d(0,0,0)";
      state = true;
    } else {
      nav.style.transform = "translate3d(-100%,0,0)";
      state = false;
    }
  });

  cabecalhoItemResponsivo.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!state) {
        nav.style.transform = "translate3d(0,0,0)";
        state = true;
      } else {
        nav.style.transform = "translate3d(-100%,0,0)";
        state = false;
      }
      containerHamburguer.classList.remove("open");
    });
  });
});

var cabecalhoContainer = document.getElementById("cabecalho-container");
var cabecalhoItemLink = cabecalhoContainer.getElementsByClassName("cabecalho-item_link");
for (var i = 0; i < cabecalhoItemLink.length; i++) {
  cabecalhoItemLink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
