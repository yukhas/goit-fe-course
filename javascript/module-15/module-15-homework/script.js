/* Создать две кнопки в HTML: start и stop.
Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.
При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года. */

const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const timerDisplay = document.querySelector(".timer-display");
let currentTime, start, stop;

startButton.addEventListener("click", function (event) {
    timer.start();
});
stopButton.addEventListener("click", function (event) {
    timer.stop();
});


function Timer() {
    this.startTime = 0;
    this.stopTime = 0;
    this.interval = 0;
}


Timer.prototype.start = function () {
    let date = new Date();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    this.startTime = time;
    start = date.getTime();
    currentTime = setInterval(() => {
        date = new Date();
        time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        timerDisplay.textContent = time;
    }, 1000);
    console.log(timer);
}

Timer.prototype.stop = function () {
    clearInterval(currentTime);
    let date = new Date();
    stop = date.getTime();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    this.stopTime = time;
    let arrStopTime = this.stopTime.split(' : ');
    this.interval = `${Math.round((stop - start)/ 60000)} minutes ${Math.round((stop - start) / 1000)} seconds`;
    timerDisplay.textContent = this.interval;
    console.log(timer);
    console.log(timer.interval);
    
}

const timer = new Timer();
console.log(timer);




