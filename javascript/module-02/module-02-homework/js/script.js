/*
   Есть три курорта: taba, sharm или hurgada.
   
   Необходимо через prompt попросить ввести число, от 1 до 3-х.
   
   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.
   
   После этого вывести сообщение о том, что пользователь 
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

let num = +prompt("Enter number from 1 to 3, 1 - Taba, 2 - Sharm, 3 - Hurgada", 1);

switch (num) {
    case 1:
        console.log("You chose Taba resort");
        break;
    case 2:
        console.log("You chose Sharm resort");
        break;
    case 3:
        console.log("You chose Hurgada resort");
        break;
    default:
        console.log("Enter correct number of resort");
        break;
}

