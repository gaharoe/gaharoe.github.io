let slide = document.querySelector("div.slider");
let alGreen = document.querySelector("div.alGreen");
let alBlue = document.querySelector("div.alBlue");
let alRed = document.querySelector("div.alRed");
let time = document.querySelector("div.box div.timebox h1");
let chatMe = document.querySelector("div.box div.buttons a");

let check = document.querySelector("nav ul input");
let starter = document.querySelector("div.container div.box button.start");
let boost = document.querySelector("div.container div.box div.buttons button.boost");
function timeout(){
  let timer = 60;
  time.innerHTML = `00:${(timer)-1}`;
  timer = timer - 2;
  let interval = setInterval(count, 1000);
  function count(){
    if(timer < 10){time.innerHTML = `00:0${(timer)}`;}
    else {time.innerHTML = `00:${(timer)}`;}
    if (timer == 0){
      alRed.classList.add("Up");
      alGreen.classList.remove("Up");
      boost.classList.remove("booster");
      chatMe.classList.add("chatMe");
      let counting = 1;
      let redDisappear = setInterval(function(){
        if(counting > 1){
          alRed.classList.remove("Up");
          alBlue.classList.remove("Up");
          clearInterval(redDisappear);
        }
        counting++;
      }, 1000);
      clearInterval(interval);
    }
    timer--;
  }
  return;
}

function slider(){
  slide.classList.toggle("slide");
}

function alertUp(){
  alGreen.classList.add("Up");
  alBlue.classList.add("Up");
  alRed.classList.add("Up");
  boost.classList.add("booster");
  chatMe.classList.remove("chatMe");
  timeout();
}

check.addEventListener('click', slider);
starter.addEventListener('click', alertUp);
boost.addEventListener('click', function(){
  alBlue.classList.add("alBlueUper");
  let counting = 1;
  let interval = setInterval(function(){
    if(counting > 1){
      alBlue.classList.remove("alBlueUper");
      clearInterval(interval);
    }
  counting++;
  }, 1000);
});
