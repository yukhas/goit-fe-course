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



const soundOnOff = document.getElementById("slideThree");

soundOnOff.onclick = function () {
  if (soundOnOff.hasAttribute("checked")) {
    soundOnOff.removeAttribute("checked");
  } else {
    soundOnOff.setAttribute("checked", true);
  }
};

btns.addEventListener("click", function (event) {
  if (activeBtn.node !== null) {
    activeBtn.node.classList.remove("keyboard__btn--active");
  }
  if (event.target.classList.contains("keyboard__btn")) {
    event.target.classList.add("keyboard__btn--active");
    activeBtn.node = event.target;
    if (soundOnOff.hasAttribute("checked")) {
      playSound();
    }
  }
});


