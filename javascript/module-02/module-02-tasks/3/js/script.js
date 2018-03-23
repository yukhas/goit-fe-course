/* 
  falsy - это значения undefined, '', -0, +0, null, NaN, false.
*/

const days = 14;
const rate = 50;
let discount;
let cost;

// Расскоментируйте значение для проверки корректности вашего условия
// discount = undefined;
// discount = -0;
// discount = +0;
// discount = NaN;
// discount = false;
// discount = '';
// discount = 2;

// Напишите проверку, которая не допустит деления на все falsy значения
/* if(discount !== false && discount !== 0 && discount !== undefined && NaN) {
   cost = days * rate / discount;
} else {
  cost = days * rate;
}*/
if (discount != false && discount !== undefined && discount == discount) {
  cost = days * rate / discount;
} else {
  cost = days * rate;
}

console.log(`cost = ${cost}`);














