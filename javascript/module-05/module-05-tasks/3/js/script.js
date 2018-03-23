/*  
  В этой работе содается объект - хранилище.
  Должны хранится пары ключ-значение.
  Ососбенность данного хранилища в том, 
  что ключи генерируются специальной 
  функцией на на основе замыкания, что гарантирует уникальность ключа. 
  Ключи создаются как у масива от 0 и далее добавляя по 1.
  Ваша задача состоит в том, чтобы создать функцию addToObj, 
  которая гарантирет уникальность добавляемого значения 
  (вернее в соданную функцию добавить код)
  
*/

// счетчик на основе замыкания
const counter = (function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
})();

/*
  Пример ипользования счетчика
  
  counter.value() // 0
  counter.increment();
  counter.value() // 1
*/

// создает объект без методов
const emtyObject = Object.create(null);

// Реализовать проверку на уникальность value перед добавлением.
function addToObj(value, obj) {
  // реализацию добавления пишем сюда
  for (const key in obj) {
    if (obj[key] === value) {
      return;
    }
  }
  obj[counter.value()] = value;
  counter.increment();
}

addToObj("one", emtyObject);
addToObj("two", emtyObject);
addToObj("three", emtyObject);
addToObj("four", emtyObject);
addToObj("one", emtyObject);

// Вывод объекта
console.log(emtyObject);
