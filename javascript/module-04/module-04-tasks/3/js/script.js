/*  Есть массив с логинами (logins)
    Написать функцию, addLogin(value) 
    которая 
     1)проверяет количество символов и 
       пропускает от 3-х до 16-ти включительно,
       иначе возвращает текст с просьбой изменить
       логин (уменьшить - 'Не более 16 символов', если больше 16 
       и увеличить 'Не менее 3-х символов', если меньше 3-х)
     2)добавлет новый логин в logins только если тот уникальный 
       и возвращает true.
       Если не уникальный, то функция предлагает придумать новый логин,
       возвращая строку 'Such name already exists'.
    */

let logins = ['ImFirst', 'robotGoogles', 'R2D2', 'admin', 'test', 'user'];

function addLogin(value) {
  // код написать здесь
  if (value.length > 16) {
    return 'Не более 16 символов';
  } else if (value.length < 3) {
    return 'Не менее 3-х символов';
  } else {
    if (logins.every(n => (n !== value))) {
      logins.push(value);
      return true;
    }
    return 'Этот логин уже занят, подберите другой логин.';
  }
}
console.log(addLogin('ImFirst') === 'Этот логин уже занят, подберите другой логин.');
// должно быть -> true

console.log(addLogin('a') === 'Не менее 3-х символов');
// должно быть -> true

console.log(addLogin('aaa') === true);
// должно быть -> true

console.log(addLogin('123456789abcdef') === true);
// должно быть -> true

console.log(addLogin('0123456789abcdefg') === 'Не более 16 символов');
// должно быть -> true

