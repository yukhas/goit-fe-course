/* Создать две кнопки в HTML: start и stop.
Реализовать функционал таймера отсчета старта печати через функцию - 
конструктор со свойсвами startTime, stopTime и interval.
Добавить в prototype методы start и stop.
При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, 
функция сохраняет значение текущего момента времени в stopTime 
и записывает разницу между startTime и stopTime в interval. */

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
    
}

const timer = new Timer();
console.log(timer);




