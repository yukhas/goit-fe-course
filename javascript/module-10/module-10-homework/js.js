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





// дальше идет код с обьяснением!!!!!!!!!!!!!!!!!!!!!!!!!!


const lang = "qwerty";
const string = "qryte";//строка которая нам нужна(которую нужно будет вводить для проверки)
const charsArr = string.split("").reverse();//массив строки которую нужно вводить
const timerOutput = document.querySelector(".timer");//путь на див где будет таймер
const exerciseOutput = document.querySelector(".exercise");//путь на див где будет выведена строка string
const keyboard = document.querySelector(".keyboard");// путь где будет виден результат нашей игры

let arrMain = [];//создаем массив где будут хранится все верно введенные буквы
let counter = 0;//создаем счетчик для таймера
let allKeys = [];//создаем массив где будут хранится все буквы которые мы ввели(не только те что есть в string)

// создаем таймер с помощью setInterval и выводим его значение в див с таймером(timerOutput)
let time = setInterval(() => {
    counter++;
    timerOutput.innerHTML = counter;
}, 1000);

//выводим строку string
exerciseOutput.innerHTML = string;
//выводим результат из localStorage с помощью метода getItem и получаем цифру(время последней попытки ввести буквы)
keyboard.textContent = `Your last result: 5 letters in ${localStorage.getItem("data")} sec`;

//вешаем слушателя на весь документ
window.addEventListener("keydown", function (e) {
    // при нажатии кнопки клавиатуры пушем в массив где будут хранится все буквы которые мы ввели(не только те что есть в string)
    allKeys.push(e.key);
    // проверяем если количество введеных букв меньше длины string то выполнить код(1)
    if (allKeys.length <= 5) {
        // код(1) : проверка если массив в котором лежит строка string есть 
        //буква которую мы нажали на клавиатуре то запушить ее в массив где будут хранится все верно введенные буквы
        if (charsArr.includes(e.key)) {
            arrMain.push(e.key);
            // проверка если в массиве arrMain 5 букв то остановить таймер код(2) и вывести в html коде результат код(3) 
            //и записать его в localStorage с помощью метода setItem код(4)
            if (arrMain.length == 5) {
                for (let i = 0; i < arrMain.length; i++) {
                    if (arrMain[i] == charsArr[i]) {
                        //код(2)
                        clearInterval(time);
                        keyboard.textContent = "";
                        //код(3)
                        keyboard.textContent = `Your result: 5 letters in ${counter} sec`;
                        //код(4)
                        localStorage.setItem("data", JSON.stringify(counter));
                    }
                }
            }
        }
        // если в массиве allKeys больше чем 5 букв, остановить таймер и вывести что ты проиграл.
    } else {
        clearInterval(time);
        keyboard.textContent = "You looooooose!";
    }
});