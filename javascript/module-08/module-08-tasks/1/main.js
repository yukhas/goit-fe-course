/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике на кнопке с надписью "space", элемету btn
  должен присвоиться класс keyboard__btn--active. 
 
 - При следующем клике этот класс должен удаляться, 
  и так поочереди. Рекомендуется использовать classList.toggle.
 
 - Элементу pressed должно присваиваться значение
  textContent элемента btn.
*/

const btn = document.querySelector(".keyboard__btn--space");
const pressed = document.querySelector(".pressed");

<<<<<<< HEAD
btn.addEventListener("click", () => {
  btn.classList.toggle("keyboard__btn--active");
  pressed.textContent = btn.textContent;
});
=======
>>>>>>> 2c08d72a4906622798e5b118bac33a6a3384e42b
