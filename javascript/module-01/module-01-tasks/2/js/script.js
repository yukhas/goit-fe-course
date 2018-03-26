/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку формата: день/месяц/год  
  в виде xx/xx/xxxx
  PS - обратите внимние на необходимость двух цифр 
  для даты и месяца.
  Найдите ошибку в коде, результат будет выведен 
  в консоли и равен комментарию напротив console.log
*/

const day = 02;
const month = 10;
const year = 2017;

let dayString = day.toString();
let monthString = month.toString();

if (dayString.length === 1) {
  dayString = "0" + day;
}

if (monthString.length === 1) {
  monthString = "0" + month;
}

const date = dayString + "\/" + monthString + "\/" + year;

console.log(date); // "02/10/2017"