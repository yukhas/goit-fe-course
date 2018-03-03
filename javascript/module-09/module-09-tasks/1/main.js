/* 
   Составить HTML шаблон c id="row-tpl", который принимает
   массив символов и создает одну строку клавиаутры состоящую
   из элементов  button, обернутых в общий div, текстовый
   контент которых будет буквами из массива символов.
   
   html разметка должна быть такая, emmet сокращение
   div>button*n{значение элемента массива}, где n это
   кол-во элементов массива
*/

// пример массивов символов которые будут передаваться в шаблон
const rows = {
    top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};

/* const html = document.querySelector("#row").textContent.trim();
const compiled = _.template(html);
const result = compiled(rows.top);
console.log(result);
const container = document.querySelector("#row-container");
container.innerHTML = result; */


// Функция для проверки, она использует шаблон с id=row-tpl
// и рендерит строку в элемент с id=row-container.
// Если вы верно запишите шаблон, то в превью отобразится
// строка кнопок
// Подставив rows.middle или rows.middle вмето rows.top,
// изменится строка кнопок на те что указаны в строке
renderRow(rows.top);
