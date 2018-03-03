/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};


const alphabet = `${lang.en} `;
console.log(alphabet);
const soundOnOff = document.getElementById("slideThree");

soundOnOff.onclick = function () {
    if (soundOnOff.hasAttribute("checked")) {
        soundOnOff.removeAttribute("checked");
    } else {
        soundOnOff.setAttribute("checked", true);
    }
};

const activeBtn = {
    node: null
};

const notes = Array.from(document.querySelectorAll("audio"));

let notesArr = [];
for (let k = 0; k < notes.length; k++) {
    notesArr.push(notes[k].getAttribute("data-note"));
}
console.log(notesArr);

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
const html = document.querySelector("#container").textContent.trim();

const compiled = _.template(html);
const result = compiled(lang);
const keyboard = document.querySelector("#keyboard");
keyboard.innerHTML = result;

const buttons = Array.from(document.querySelectorAll("button"));
const pressed = document.querySelector(".pressed");

window.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (alphabet.includes(event.key)) {
        buttons.forEach(item => {
            if (item.textContent === event.key) {
                if (activeBtn.node !== null) {
                    activeBtn.node.classList.remove("keyboard__btn--active");
                }
                item.classList.add("keyboard__btn--active");
                activeBtn.node = item;
                pressed.textContent = item.textContent;
                if (item.textContent === " ") {
                    pressed.textContent = "space";
                }
                if (soundOnOff.hasAttribute("checked")) {
                    playSound(item.dataset.note);
                }
            }
        });
    }
});



