/*  
  Напишите код, который бы  с помощью функции-конструкора 
  (CF - Constructor Function) User позволял создавать 
  объекты пользователя со следующим свойствами:
 - тип - 'user'
 - имя - параметр CF
 - age - параметр CF
 - friends - число, параметр CF

  Написать функцию getUserInfo, которая на основании одного 
  параметра - имени объекта, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать один объект пользователя User и 
  с помощью функции getUserInfo вывести строку в консоль.
*/
function User(name, age, friends) {
  this.type = "user";
  this.name = name;
  this.age = age;
  this.friends = friends;
}

function getUserInfo(userName) {
  console.log(`User ${userName.name} is ${userName.age} years old and has ${userName.friends} friends`);
}

const user = new User('John', 30, 15);
console.log(user);

getUserInfo(user);
