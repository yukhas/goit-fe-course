/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const regName = /^[A-za-z]{3,16}$/;
const regTel = /^\+\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{3}$/;
const results = {
  firstname: "",
  lastname: "",
  tel: ""
}

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  if (regName.test(firstname.value)) {
    results.firstname = firstname.value;
  }
  if (regName.test(lastname.value)) {
    results.lastname = lastname.value;
  }
  if (regTel.test(tel.value)) {
    results.tel = tel.value;
  }
  showResults(results);
}

function showResults(results) { 
  for (let key in results) {
    let li = document.createElement('li');
    if (results[key]) {
      li.textContent = `SUCCESS:${key} passed validation`;
      li.classList.add('success');
    } else {
      li.textContent = `ERROR: ${key} failed validation`;
      li.classList.add('error');      
    }
    resultsList.appendChild(li);
  }
  
}