/* Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата.

поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
поле langs содержит массив доступных языков
поле currentLang будет содержать язык который сейчас выбран

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере.Это обычный prompt в котором написано en - 0, ru - 1, ua - 2. Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel.При cancel прекратить выполнение скрипта.

Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.

Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита. */

const enAlphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ruAlphabet = "йцукенгшщзхъфывапролджэячсмитьбю.";
const uaAlphabet = "йцукенгшщзхїфівапролджєячсмитьбю.";

let enAlphabetArray = addKeyboardLayout(enAlphabet);
let ruAlphabetArray = addKeyboardLayout(ruAlphabet);
let uaAlphabetArray = addKeyboardLayout(uaAlphabet);

const keyboard = {
    layouts: {
        en: {
            topRow: enAlphabetArray[0],
            middleRow: enAlphabetArray[1],
            bottomRow: enAlphabetArray[2]
        },
        ru: {
            topRow: ruAlphabetArray[0],
            middleRow: ruAlphabetArray[1],
            bottomRow: ruAlphabetArray[2]

        },
        ua: {
            topRow: uaAlphabetArray[0],
            middleRow: uaAlphabetArray[1],
            bottomRow: uaAlphabetArray[2]

        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let userLang;

do {
    userLang = prompt('Enter number of language: en-0, ru-1, ua-2');
    if (userLang === '0') {
        keyboard.currentLang = keyboard.langs[0];
        break;
    } else if (userLang === '1') {
        keyboard.currentLang = keyboard.langs[1];
        break;
    } else if (userLang === '2') {
        keyboard.currentLang = keyboard.langs[2];
        break;
    } else if (userLang === null) {
        break;
    }
    alert('Language was not chosen. Enter 0, 1 or 2');
} while (1);

getRandCharInAlph();

function addKeyboardLayout(alphabet) {
    let lettersArray = alphabet.split('');
    let firstLine = lettersArray.filter((item, i) => (i < 12));
    let secondLine = lettersArray.filter((item, i) => (i > 11 && i < 23));
    let thirdLine = lettersArray.filter((item, i) => (i > 22));
    let multiArray = [firstLine, secondLine, thirdLine];
    //console.log(multiArray);
    return multiArray;
}

function getRandCharInAlph() {
    let row = getRandRow();
    let randIndex;
    let rowKey;
    let randSymbol;
    if (keyboard.currentLang === 'en') {
        randIndex = getRandIndex(12);
    } else if (keyboard.currentLang === 'ru') {
        randIndex = getRandIndex(11);
    } else if (keyboard.currentLang === 'ua') {
        randIndex = getRandIndex(10);
    }
    rowKey = Object.keys(keyboard.layouts[keyboard.currentLang])[row];
    randSymbol = keyboard.layouts[keyboard.currentLang][rowKey][randIndex];
    /* console.log(row);
    console.log(randIndex);
    console.log(rowKey); */
    console.log(randSymbol);
    return randSymbol;
}

function getRandRow() {
    return Math.floor(Math.random() * 3);
}

function getRandIndex(num) {
    return Math.floor(Math.random() * num);
}

