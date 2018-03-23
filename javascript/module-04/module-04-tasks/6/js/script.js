// Все циклы for надо переписать с помощью 
//  map, filter, reduce, every


/* Функция findGreaterThen получает два 
   аргумента  - число и массив.
   Функция фозвращает новый массив,
   содержащий элементы которые больше
   числа.
*/
/* const findGreaterThen = (n, arr) => {
  const result = [];

  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (arr[i] > n) {
      result.push(arr[i]);
    }
  }
  return result;
};*/
const findGreaterThen = (n, arr) => (arr.filter(item => (item > n)));

const numbers = [1, 2, 3, 4, 5];
console.log(findGreaterThen(2, numbers)); // [3, 4, 5,]
console.log(findGreaterThen(3, numbers)); // [4, 5,]
console.log(findGreaterThen(1, numbers)); // [2, 3, 4, 5,]

/* Функция findEvery получает два 
   аргумента  - число и массив.
   Функция фозвращает true если
   все элементы имеют значения больше или равны числу.
   Иначе есть хоть один элемент меньше числа,
   то возвращается false
*/
/*const findEvery = (n, arr) => {

  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (arr[i] < n) {
      return false;
    }
  }
  return true;
};*/
const findEvery = (n, arr) => arr.every(item => (item >= n));

const numbs = [5, 6, 7, 8, 9];
console.log(findEvery(5, numbs)); // true
console.log(findEvery(6, numbs)); // false
console.log(findEvery(4, numbs)); // true

//==========================================
/* Функция multiplyBy принимает два аргумента -
   число и массив. Функция возвращает массив,
   все значения которого умножены на число.
   */
/*const multiplyBy = (n, arr) => {
  let result = [];

  for (let i = 0, max = arr.length; i < max; i += 1) {
    result.push(arr[i] * n);
  }

  return result;
};*/
const multiplyBy = (n, arr) => arr.map(item => (item * n));
console.log(multiplyBy(2, numbers)); // [2, 4, 6, 8, 10]
console.log(multiplyBy(3, numbers)); // [3, 6, 9, 12, 15]
console.log(multiplyBy(4, numbers)); // [4, 8, 12, 16, 20]


//==========================================
/* Функция summAllNumbers принимает любое число аргументов.
   Функция возвращает число - сумму всех аргументов.
*/
/*function summAllNumbers () {
  const args = Array.from(arguments);
  let accumulator = 0;
  
  for(let i = 0, max = args.length; i < max; i += 1) {
    accumulator += args[i];
  }
  
  return accumulator;
};*/
function summAllNumbers() {
  const args = Array.from(arguments);
  let accum = args.reduce((item, next) => item + next);
  return accum;
}

console.log(summAllNumbers(1, 2, 3)); // 6
console.log(summAllNumbers(1, 2, 3, 4)); // 10
console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15
