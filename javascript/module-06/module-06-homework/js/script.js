/* Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита.
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
Добавьте свойство charCount и метод setCharCount.Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом.Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем.Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число(целое положительное).
Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами из массива chars.
Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.
    Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput и task посимвольно.Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.
Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию. */

const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x',
        'c', 'v', 'b', 'n', 'm']
};

keyTrainer.setCharCount = function () {
    let numSymbols = + prompt('Enter quantity of symbols');
    let positiveInteger = this.checkPositiveInteger(numSymbols);
    if (positiveInteger) {
        return this.charCount = numSymbols;
    } else {
        while (!positiveInteger) {
            numSymbols = + prompt('Enter positive integer number');
            positiveInteger = this.checkPositiveInteger(numSymbols);
        }
        return this.charCount = numSymbols;
    }
};

keyTrainer.checkPositiveInteger = function (number) {
    let isNumInt = (Number.isInteger(number) && number > 0) ? true : false;
    return isNumInt;
}

keyTrainer.createTask = function () {
    let arr = new Array(this.charCount);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
    };
    return this.task = arr;
}

keyTrainer.startTask = function () {
    let str = prompt(`Retype this string: ${this.task.join('')}`);
    return str;
}

function run() {
    this.setCharCount();
    this.createTask();
    this.userInput = this.startTask();
    let strUser = this.userInput.split('');
    let userErrors = 0;
    for (let i = 0; i < strUser.length; i++) {
        if (this.task[i] !== strUser[i]) {
            userErrors++;
        }
    };
    if (userErrors === 0) {
        console.log(`You have 0 mistakes. Congratulations!!`);
    } else {
        console.log(`You have ${userErrors} mistakes. Try again and good luck!`);
    }
}

let runIt = run.bind(keyTrainer);
runIt();


