/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по label должен сработать checkbox и 
  включить, либо выключить звук при клике на клавишу.
  
 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
  
 - Для проигрывания музыки вызовите функцию playSound
*/

const playSound = () => {
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

const btns = document.querySelector(".keyboard");
const x = document.querySelector(".x-position");
const y = document.querySelector(".y-position");
const activeBtn = {
  node: null
};

let soundOnOff = document.querySelector("#slideThree");
console.log(soundOnOff.hasAttribute('checked'));
if (soundOnOff.hasAttribute('checked')) {
  btns.addEventListener("click", function (event) {
    if (event.target.classList.contains("keyboard__btn")) {
      console.log(event.target);
      event.target.classList.add("keyboard__btn--active");
      playSound();
    }
  });
} else {
  //btns.addEventListener("click", colorOn(event));
}

/* function soundOn(event) {
  if (event.target.classList.contains("keyboard__btn")) {
    console.log(event.target);
    event.target.classList.add("keyboard__btn--active");
    event.target.playSound();
  }
} */

/* function colorOn(event) {
  if (event.target.classList.contains("keyboard__btn")) {
    event.target.classList.add("keyboard__btn--active");
  }
} */

