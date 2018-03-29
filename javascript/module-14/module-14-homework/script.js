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

startButton.addEventListener("click", function (event) {
    timer.start();
});
stopButton.addEventListener("click", function (event) {
    timer.stop();
});

function Timer() {
    this.startTime = 0;
    this.stopTime = null;
    this.interval = null;
}

Timer.prototype.start = function () {
    let date = new Date();
    let time = date.getTime();
    this.startTime = time;
    console.log(timer);
}

Timer.prototype.stop = function () {
    let date = new Date();
    let time = date.getTime();
    this.stopTime = time;
    console.log(timer);
    this.interval = this.stopTime - this.startTime;
    console.log(timer);
}

const timer = new Timer();
console.log(timer);




