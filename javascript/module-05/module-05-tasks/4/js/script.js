/*  
  Дополните код так, чтобы скрипт последовательно выводил в консоль
  строку пары ключ:значение объекта poly. 
  Поле с датой вывести в Украинской локали.
  
  - Реализуйте перебор ключей обьекта используя for in в функции showUserInfoA
  - Реализуйте перебор ключей обьекта НЕ используя for in в функции showUserInfoB
*/

function User(login, pass) {
  this.login = login;
  this.pass = pass;
  this.regDate = new Date().toLocaleString('Uk-uk', options);
}

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

const poly = new User("Poly", "12345qwerty");

function showUserInfoA(obj) {
  console.log("===== With for in =====");
  // дополняем код после этого комментария
  for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}

showUserInfoA(poly);

function showUserInfoB(obj) {
  console.log("===== Without for in =====");
  // дополняем код после этого комментария
  let arrKeys = Object.keys(obj);
  arrKeys.forEach((item, i) => console.log(`${item}:${obj[item]}`));

}

showUserInfoB(poly);
