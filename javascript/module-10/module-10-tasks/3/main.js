/* 
  Написать скрипт, который по клику присваивает
  выбранной кнопке языка класс lang-ctrls__btn--active
  и сохраняет сделанный выбор  в объекте, а этот объект
  сохранятеся в localStorage.
  
  При загрузке окна происходит провека есть ли сохраненный
  выбор в localStorage и если есть, то данные для подсветки 
  коавиши берутся оттуда.
*/

const btnArea = document.querySelector(".lang-ctrls__body");
const buttons = Array.from(document.querySelectorAll(".lang-ctrls__btn"));
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    
    
}