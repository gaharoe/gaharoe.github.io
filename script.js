let slide = document.querySelector("div.slider");
let check = document.querySelector("nav ul input");

function changer(){
  slide.classList.toggle("slide");
}

check.addEventListener('click', changer);