/*
  Есть две переменные, name и typingSpeed
  содержащие имя пользователя и скорость печати,
  кол-во знаков в минуту. 
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя пользователя" печатает со скоростью "скорость печати" знаков в минуту.
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная 
  той что напротив console.log
*/

const name = 'Mango';
const typingSpeed = 50;

const message = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

console.log(message); // Mango печатает со скоростью 50 знаков в минуту.