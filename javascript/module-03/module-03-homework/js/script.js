/* Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

Массив keyboard будет иметь такую струтуру: [[первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры]].

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:

hello
javascript
trainer */


const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let alphabetArray = alphabet.split("");
let firstLine = [];
let secondLine = [];
let thirdLine = [];

console.log(alphabetArray);

for (let i = 0; i < 12; i++) {
    firstLine.push(alphabetArray[i]);
}
console.log(firstLine);

for (let j = 12; j < 23; j++) {
    secondLine.push(alphabetArray[j]);
}
console.log(secondLine);

for (let k = 23; k < 33; k++) {
    thirdLine.push(alphabetArray[k]);
}
console.log(thirdLine);

let keyboard = [firstLine, secondLine, thirdLine];
console.log(keyboard);

let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
console.log(hello);

let javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
console.log(javascript);

let trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(trainer);