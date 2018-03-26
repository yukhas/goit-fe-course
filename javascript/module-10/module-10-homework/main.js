/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("")/* .reverse() */;
const timerOutput = document.querySelector(".timer");

const taskString = document.querySelector(".exercise");
const kps = document.querySelector(".keyboard");
const startBtn = document.getElementById("start");
const userKeys = [];
const rightKeys = [];
let num = 0;
let locStorItem = localStorage.getItem("kps") || " ";
console.log(locStorItem);

let equalStr = function () {
    return rightKeys.every((item, i) => {
        item === charsArr[i];
    });
};

taskString.innerHTML = string;
kps.innerHTML = `Your best KPS: ${locStorItem}`;

startBtn.addEventListener("click", init);

function init(event) {
    let start = setInterval(() => {
        num++;
        timerOutput.innerHTML = num;
    }, 1000);
    window.addEventListener("keydown", function (event) {
        userKeys.push(event.key);
        if (userKeys.length <= string.length) {
            if (string.includes(event.key)) {
                rightKeys.push(event.key);
                if (rightKeys.length === string.length) {
                    clearInterval(start);
                    if (equalStr) {
                        let valueKPS = countKPS();
                        console.log(valueKPS);
                        kps.innerHTML = `Current KPS: ${valueKPS}`;
                        if (locStorItem < valueKPS) {
                            localStorage.setItem("kps", `${valueKPS}`);
                        }
                    }
                    startBtn.removeEventListener("click", init);
                }
            } else {
                clearInterval(start);
                kps.innerHTML = "You lose! Try again!"
                startBtn.removeEventListener("click", init);
            }
        }
    });
}

function countKPS() {
     return rightKeys.length / num;
}

