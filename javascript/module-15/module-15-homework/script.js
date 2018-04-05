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
const daysToNYDisplay = document.querySelector(".days-to-ny");



class Timer {
    constructor () {
        this.startTime = null;
        this.stopTime = null;
        this.interval = null;
    }

    start () {
        const date = Date.now();
        this.startTime = date;
    }

    stop () {
        const date = Date.now();
        this.stopTime = date;
        this.interval = this.stopTime - this.startTime;
    }

    getTime () {
        const numOfMinutes = Math.floor(this.interval / 60000);
        const numOfSeconds = Math.floor((this.interval - (numOfMinutes * 3600)) / 1000);
        const time = `${numOfMinutes} minutes, ${numOfSeconds} seconds`;
        return time;
    }

    static timeToNY () {
        const today = new Date(); 
        const nextYear = today.getFullYear() + 1;
        let endYear = new Date(nextYear, 0);

        const msInDay = 1000 * 60 * 60 * 24;
        const msToNY = endYear - today;
        const numOfDaysToNY = `${Math.floor(msToNY / msInDay)} days to New Year`;

        return numOfDaysToNY;
    }
}

const stopwatch = new Timer();

startButton.addEventListener("click", function (event) {
    stopwatch.start();
    console.log(stopwatch);
});
stopButton.addEventListener("click", function (event) {
    stopwatch.stop();
    stopwatch.getTime();
    console.log(stopwatch);
    console.log(stopwatch.getTime());        
    timerDisplay.textContent = stopwatch.getTime();
    daysToNYDisplay.textContent = Timer.timeToNY();
});









