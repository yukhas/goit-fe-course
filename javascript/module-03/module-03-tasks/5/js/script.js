// Есть двумерный массив. Перебрать массив в цикле и составить из элементов все подмассивов строку.

// Первая строка будет иметь вид "abcxyz"
// Вторая строка будет иметь вид "axbycz"
const letters = [
  ['a', 'b', 'c'],
  ['x', 'y', 'z']
];

let rowsArray = [];
let colsArray = [];

for (let i = 0; i < letters.length; i++) {
  for (let j = 0; j < letters[0].length; j++) {
    rowsArray.push(letters[i][j]);
  }
}

console.log(rowsArray.join(""));

for (let k = 0; k < letters[0].length; k++) {
  for (let l = 0; l < letters.length; l++) {
    colsArray.push(letters[l][k]);
  }
}

console.log(colsArray.join(""));