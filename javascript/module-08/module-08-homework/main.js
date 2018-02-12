/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

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

window.addEventListener("keypress", function (event) {
    let userCharCode = String.fromCharCode(event.keyCode);
    console.log(userCharCode);
    if (userCharCode === " ") {
        userCharCode = "space";
    }
    buttons.forEach((item, i) => {
        if (item.textContent === userCharCode) {
            if (activeBtn.node !== null) {
                activeBtn.node.classList.remove("keyboard__btn--active");
            }
            if (item.classList.contains("keyboard__btn")) {
                item.classList.add("keyboard__btn--active");
                activeBtn.node = item;
                if (soundOnOff.hasAttribute("checked")) {
                    playSound(item.dataset.note);
                }
            }
        }
    })
});