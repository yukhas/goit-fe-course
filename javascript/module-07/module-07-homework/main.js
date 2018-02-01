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

function addKeyboardLayout(alphabet) {
    let lettersArray = alphabet.split('');
    let firstLine = lettersArray.filter((item, i) => (i < 12));
    let secondLine = lettersArray.filter((item, i) => (i > 11 && i < 23));
    let thirdLine = lettersArray.filter((item, i) => (i > 22));
    let multiArray = [firstLine, secondLine, thirdLine];
    return multiArray;
}

keyboard.createLayout = function () {
    const rootKeyboard = document.getElementById('keyboardLayout');
    rootKeyboard.appendChild(createRow.call(keyboard, 'topRow'));
    rootKeyboard.appendChild(createRow.call(keyboard, 'middleRow'));
    rootKeyboard.appendChild(createRow.call(keyboard, 'bottomRow'));
}

keyboard.createLayout();

function createRow(xRow) {
    const row = document.createElement('div');
    row.classList.add(xRow);
    for (let i = 0; i < keyboard.layouts.en[xRow].length; i++) {
        let button = document.createElement('button');
        button.classList.add('btn');
        row.appendChild(button);
        for (let j = 0; j < 3; j++) {
            let letter = document.createElement('div');
            letter.classList.add(keyboard.langs[j]);
            letter.textContent = keyboard.layouts[keyboard.langs[j]][xRow][i];
            button.appendChild(letter);
        }
    }
    return row;
}


