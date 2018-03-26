/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым 
  положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6
    
  Если количество мест позволяет, то вывести пользователю 
  сообщение через confirm что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

/* Первый вариант, сделанный с помощью операторов ветвления*/


let sharm = 15;
let hurgada = 25;
let taba = 6;

let num = +prompt("Enter quantity of people in group", 1);
let acceptance;

if ((num - Math.floor(num) != 0)) {
    alert("Enter integer number");
} else {
    if (num <= sharm) {
        acceptance = confirm("Do you want to be in Sharm group");
        if (acceptance) {
            sharm -= num;
        } else if (num <= hurgada) {
            acceptance = confirm("Do you want to be in Hurgada group");
            if (acceptance) {
                hurgada -= num;
            } else if (num <= taba) {
                acceptance = confirm("Do you want to be in Taba group");
                if (acceptance) {
                    taba -= num;
                }
            }
        }
    } else if (num <= hurgada) {
        acceptance = confirm("Do you want to be in Hurgada group");
        if (acceptance) {
            hurgada -= num;
        } else if (num <= taba) {
            acceptance = confirm("Do you want to be in Taba group");
            if (acceptance) {
                taba -= num;
            }
        }
    } else if (num <= taba) {
        acceptance = confirm("Do you want to be in Taba group");
        if (acceptance) {
            taba -= num;
        }
    } else {
        alert("There's no free places in our groups");
    }
}


console.log(`Sharm group has ${sharm} places, Hurgada group has ${hurgada} places, Taba group has ${taba} places`);

/* Второй вариант, сделанный с помощью цикла*/

/* const sharm = 15;
const hurgada = 25;
const taba = 6;

let resorts = [sharm, hurgada, taba];
let resortsNames = ["Sharm", "Hurgada", "Taba"];
let acceptance;

let num = +prompt("Enter quantity of people in group", 1);

if ((num - Math.floor(num) != 0)) {
    alert("Enter integer number");
} else {
    for (let i = 0; i < resorts.length; i++) {
        if (num <= resorts[i]) {
            acceptance = confirm(`Do you want to be in ${resortsNames[i]} group`);
            if (acceptance) {
                resorts[i] -= num;
                break;
            } else continue;
        }
    }
    if ((num > sharm) && (num > hurgada) && (num > taba)) {
        alert("There's no free places in our groups");
    }
}

console.log(`Sharm group has ${resorts[0]} places, Hurgada group has ${resorts[1]} places, Taba group has ${resorts[2]} places`); */