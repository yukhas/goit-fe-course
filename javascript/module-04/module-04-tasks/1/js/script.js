/*  Написать функцию, getPx(str), обратную setPx(). 
    Функция getPx должна получать строку вида '10px' 
    и возвращать число 10.
    */

// функция принимает размер виде строки и возвращает число без px
function getPx(str) {
  // написать код здесь
  if (typeof str === "string" && !isNaN(parseFloat(str))) {
    return parseFloat(str);
  } else {
    return 'Input correct string!';
  }
}
// проверка правильности кода
console.log(getPx('10px') === 10);   // должно быть:  true
console.log(getPx('10.5') === 10.5); // должно быть:  true
console.log(getPx('0') === 0);       // должно быть:  true
console.log(getPx(-1));              // должно быть:  'Input correct string!'
console.log(getPx(10));              // должно быть:  'Input correct string!'


// Вспомогательная информация
// функция проверяет является ли параметр числом
function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}
/*
console.log(`-10 is number? -> ${isNumber(-10)}`)             // -> true
console.log(`10.5 is number? -> ${isNumber(10.5)}`)           // -> true
console.log(`'10.5' is number? -> ${isNumber('10.5')}`)       // -> false
console.log(`null is number? -> ${isNumber(null)}`)           // -> false
console.log(`undefined is number? -> ${isNumber(undefined)}`) // -> false
console.log(`NaN is number? -> ${isNumber(NaN)}`)             // -> false
console.log(`Infinity is number? -> ${isNumber(Infinity)}`)   // -> false
*/

// функция принимает размер в number и возвращает строку добавив px 
function setPx(num) {
  // если ввели число, то вернем строку
  if (isNumber(num)) {
    return num + 'px';
  }
  // если ввели не число, то вернем -1
  else {
    return -1;
  }
}
/*
console.log(`10.5 -> ${setPx(10.5)}`); // -> "10.5px"
console.log(`'10.5' ${setPx('10.5')}`); // -> -1
*/

/*
console.log(parse  ?   ('10.5px'));   // -> 10
console.log(parse  ?   ('10.5px'));   // -> 10.5
*/