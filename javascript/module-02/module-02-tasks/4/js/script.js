/* 
  Найдите и исправьте одну ошибку в коде, 
  чтобы вывод четных (even) и нечетных (odd)
  происходил верно                           
*/

const num = parseInt(Math.random() * 100);

const res = num % 2 === 1 ? "odd" : "even";

console.log(`${num} is ${res}`);




