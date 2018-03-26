/*  Есть массив с ценой проживания в номере (rents).
    1) Написать функцию, arrangeArray,
       которая сортирует массив rents по ценам 
       в порядке возрастания
    2) Написать функцию, uniqRents(arr) 
      которая содает новый массив, 
      состоящий только из уникальных цен. 
    3) Написать функцию rentsToString(arr), 
      которая из анализа массива rents 
      возвращает строку.
    */

let rents = [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102];

function arrangeArray(arr) {
  let res = [];
  // код написать здесь
  res = arr.sort((n, next) => n - next);
  console.log(res);
  return res;
}

function uniqArray(arr) {
  let res = [];
  // код написать здесь
  let sortedArr = arr.sort((n, next) => n - next);
  res = sortedArr.filter((item, i) => (item !== sortedArr[i + 1]));
  console.log(res);
  return res;
}

function rentsToString(arr) {
  let sum, min, max;
  // код написать здесь
  let res = arr.sort((n, next) => n - next);
  min = res[0];
  max = res[res.length - 1];
  sum = arr.reduce((n, next) => (n + next));
  console.log(`Цены проживания в отелях 
      начинаются от ${min}$ и заканчиваются ${max}$.
      Средняя цена на сегодня состовляет ${sum / arr.length}.`);
  return `Цены проживания в отелях 
      начинаются от ${min}$ и заканчиваются ${max}$.
      Средняя цена на сегодня состовляет ${sum / arr.length}.`
}

arrangeArray(rents);
uniqArray(rents);
rentsToString(rents);
// Проверки

console.log(`isEqual: ${isEqual(rents, [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102])}`);
// "isEqual: true"
console.log(`arrangeArray: ${isEqual(arrangeArray(rents), setArrange(rents))}`);
// "arrangeArray: true"
console.log(`uniqArray: ${isEqual(uniqArray(rents), setUniq(rents))}`);
// "arrangeArray: true"

// дополнительные материалы
// let sorted = rents.sort((current, next) => current - next);
// console.log(['asd', 'sad', 'das'].sort());
// ["asd", "das", "sad"]

// console.log([32, 123, 99].sort());
// [123, 32, 99]

// let srt = [32, 123, 99].sort();
// console.log(`min = ${srt[0]}, max = ${srt[srt.length - 1]}`);
// "min = 123, max = 99"

// let sum = [32, 123, 99].reduce((accum, next) => accum + next);
// console.log(`sum = ${sum}`);
// "sum = 254"

// console.log(['asd', 'sad', 'das'].sort((current, next) => current < next));
// ["sad", "das", "asd"]

// console.log(['asd', 'sad', 'das'].indexOf('sad'));
// 1

// console.log(['asd', 'sad', 'das'].indexOf('das') === 2);
// true

// console.log(['asd', 'sad', 'das'].filter((value, index, array) => value === array[index]));
// ["asd", "sad", "das"]

// console.log(['asd', 'sad', 'das'].filter((value, index, array) => array.indexOf(value) === 2));
// ["das"]

