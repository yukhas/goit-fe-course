/* 
  Найдите и исправьте одну ошибку в коде, 
  чтобы вывод секунд был всегда 
  2-х значным числом (добавить '0') 
  и вывод милисекунд был всегда 
  3-х значным числом (добавить '0' или '00') 
*/

// функция для вывода времени на экран
function start() {
  // получение текущего времени
  let d = new Date();

  // Начало блока для правок
  // вывод секунд
  tableS.textContent = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
  // вывод милисекунд
  tableMS.textContent = d.getMilliseconds() < 10
    ? "00" + d.getMilliseconds() : d.getMilliseconds() > 10 && d.getMilliseconds() < 100
      ? "0" + d.getMilliseconds() : d.getMilliseconds();
  // конец блока для правок

  // вывод часов в виде 2-х значного числа
  tableH.textContent = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();

  // вывод минут в виде 2-х значного числа
  tableM.textContent = d.getMinutes() < 10
    ? "0" + d.getMinutes()
    : d.getMinutes();
}

// поиск элемента DOM
const tableH = document.querySelector(".hour");
const tableM = document.querySelector(".min");
const tableS = document.querySelector(".sec");
const tableMS = document.querySelector(".msec");

// вызов функции start каждые 33мс
setInterval(start, 33);
