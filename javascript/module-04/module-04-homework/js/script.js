/* Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку - алфавит и возвращает массив - массивов клавиатурных строк.

Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.

Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита. */


const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let alphabetArray = [];

function addKeyboardLayout(alphabet) {
    let lettersArray = alphabet.split('');
    let firstLine = lettersArray.filter((item, i) => (i < 12));
    let secondLine = lettersArray.filter((item, i) => (i > 11 && i < 23));
    let thirdLine = lettersArray.filter((item, i) => (i > 22));
    let multiArray = [firstLine, secondLine, thirdLine];
    console.log(multiArray);
    return multiArray;
}

function getRandIndex(num) {
    let randNum = Math.floor(Math.random() * alphabetArray[num].length);
    return randNum;
}

function getRandCharInRow() {
    let row = + prompt("Enter number of row");
    if (row === 1 || row === 2 || row === 3) {
        let randIndex = getRandIndex(row - 1);
        return alphabetArray[row - 1][randIndex];
    } else {
        return 'Enter correct number!';
    }
}

/* function getRandCharInRow(row) {
    if (row === 1 || row === 2 || row === 3) {
        let randIndex = getRandIndex(row - 1);
        console.log(alphabetArray[row - 1][randIndex]);
        return alphabetArray[row - 1][randIndex];
    } else {
        console.log('Enter correct number!');
    }
}*/

function getRandCharInAlph() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
    //getRandCharInRow(randRow);
}


alphabetArray = addKeyboardLayout(alphabet);
console.log(getRandCharInRow());
console.log(getRandCharInAlph());






























