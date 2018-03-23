/*  Написать фукнцию findLongestWord(str) 
    которая получает аргументом произвольную строку и
    возвращает самое длинное слово в этой строке.   
    Важное условие  - в строке должны быть только пробелы
    и символы букв и цифр!
*/

function findLongestWord(str) {
  // код написать здесь
  if (str === "") {
    return "Введите непустую строку";
  } else {
    let arr = String(str).split(' ');
    let maxLengthItem = arr.reduce((n, next) => ((n.length >= next.length) ? n : next));
    return maxLengthItem;
  }
}


// Проверки
const find = findLongestWord("a bb ccc dddd eeeee ffff ggg hh i") === "eeeee";
console.log("правильность поиска: ", find);
// должно вернуть true

const equal = findLongestWord("bb cc hh") === "bb";
console.log("обработка равных строк: ", equal);
// должно вернуть true

const symbol = findLongestWord("a") === "a";
console.log("обработка строки-символа: ", symbol);
// должно вернуть true

const empty = findLongestWord("") === "Введите непустую строку";
console.log("обработка пустой строки: ", empty);
// должно вернуть true

const fromNum = findLongestWord(5) === "5";
console.log("приведение к строке number: ", fromNum);
// должно вернуть true

const fromBool = findLongestWord(false) === "false";
console.log("приведение к строке boolean: ", fromBool);

if (fromBool && fromNum && empty && symbol && equal && find) {
  alert(
    "Функция работает правильно! Можно сдавать работу и закоментировать этот alert!"
  );
}

// вспомогательная информация
function findNumbers(str) {
  return str.split(":");
}
// console.log(findNumbers('123:44:55:678:999'));
// -> ["123", "44", "55", "678", "999"]

const arr = [3, 4, 5, 2, 10];
const min = arr.reduce((accum, next) => (accum = accum < next ? accum : next));
// console.log(`min is '${min}'`);
// -> "min is '2'"
