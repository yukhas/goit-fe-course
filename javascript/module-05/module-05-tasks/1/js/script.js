/*  
  Напишите код, который последовательно: 
 - добавляет поле mood со значением'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true
};

user.mood = "happy";
console.log(user);

user.hobby = "javascript";
console.log(user);

delete user.premium;
console.log(user);

for (var key in user) {
  console.log(`${key} : ${user[key]}`);
}
