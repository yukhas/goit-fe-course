/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

const alphabet = lang.en.split("");
alphabet.push("space");

const html = document.querySelector("#container").textContent.trim();

const compiled = _.template(html);
const result = compiled(lang);

const keyboard = document.querySelector("#keyboard");
keyboard.innerHTML = result;

const pressed = document.querySelector(".pressed");
const activeBtn = {
    node: null
};

keyboard.addEventListener("click", function (event) {
    if (activeBtn.node !== null) {
        activeBtn.node.classList.remove("keyboard__btn--active");
    }
    if (event.target.classList.contains("keyboard__btn")) {
        event.target.classList.add("keyboard__btn--active");
        activeBtn.node = event.target;
        pressed.textContent = event.target.textContent;
    }
});
