/*  Напишите функцию toPhoneFormat(str) 
    которая получает строку c телефонным номером, 
    содержащим любые символы и 12 цифр.
    Нужно извлечь все цифры в порядке написания
    и вернуть текст номера телефона в формате строки
     +(12)(345)123-45-67. 
    */

const arr = ['+38050-1234567', '+38(050)1234-567', '38-050-123-4567', '38/050/123:45:67', '380501234567', '38-050(123-4567)'];

function toPhoneFormat(value) {
  // код написать здесь
  let symbolsArr = value.split('');
  symbolsArr = symbolsArr.filter(item => isFinite(Number(item)));
  let tel = `+(${symbolsArr[0]}${symbolsArr[1]})(${symbolsArr[2]}${symbolsArr[3]}${symbolsArr[4]})${symbolsArr[5]}${symbolsArr[6]}${symbolsArr[7]}-${symbolsArr[8]}${symbolsArr[9]}-${symbolsArr[10]}${symbolsArr[11]}`;
  return tel;
}

// проверка 
let res = arr.map(elem => elem = toPhoneFormat(elem));
console.log(res.every(elem => elem == '+(38)(050)123-45-67'));

// Вспомогательная информация

// let simbols = '+38050-1234567'.split();
// console.log(simbols);
// ['+38050-1234567']

// simbols = '+38050-1234567'.split('');
// console.log(simbols);
// ["+", "3", "8", "0", "5", "0", "-", "1", "2", "3", "4", "5", "6", "7"]


// console.log('charCodeAt 0 == ', '0'.charCodeAt(0));
// "charCodeAt 0 == " 48

// console.log('charCodeAt 9 == ', '9'.charCodeAt(0))
//"charCodeAt 9 == " 57

// let arrSimbols = simbols.filter(elem => ... );
// console.log(arrSimbols)
// ["3", "8", "0", "5", "0", "1", "2", "3", "4", "5", "6", "7"]


// let result =  `+(${arrSimbols[0]}${arrSimbols[1]})(${arrSimbols[3]}${arrSimbols[4]}${arrSimbols[5]})`;
// console.log(result)
// "+(38)(501)"