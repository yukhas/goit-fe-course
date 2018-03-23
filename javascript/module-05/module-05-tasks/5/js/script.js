/*  
    Написать функцию, которая бы выводила в консоль
    время, оставшееся до следующего Нового Года
    в Украинской локали
*/

const today = new Date(); // Получаем текущую дату
const nextYear = today.getFullYear() + 1;
//var endYear = new Date(nextYear, 11, 31, 23, 59, 59, 999); // Устанавливаем месяц и день на конец года
let endYear = new Date(nextYear, 0);

function getTimeToNewYear() {
  const msInDay = 1000 * 60 * 60 * 24;
  const msInHour = 1000 * 60 * 60;
  const msInMin = 1000 * 60;
  const msInSec = 1000;

  let numOfDays, numOfHours, numOfMin, numOfSec, numOfMs;

  let msToNewYear = endYear - today;

  numOfDays = Math.floor(msToNewYear / msInDay);
  let ms = numOfDays * msInDay;
  let msRemain = msToNewYear - ms;
  numOfHours = Math.floor(msRemain / msInHour);
  ms = numOfHours * msInHour;
  msRemain -= ms;
  numOfMin = Math.floor(msRemain / msInMin);
  ms = numOfMin * msInMin;
  msRemain -= ms;
  numOfSec = Math.floor(msRemain / msInSec);
  ms = numOfSec * msInSec;
  msRemain -= ms;
  numOfMs = msRemain;

  return `Remaining time to New Year: ${numOfDays} days, ${numOfHours} hours, ${numOfMin} minutes, ${numOfSec} seconds, ${numOfMs} milliseconds`;
}



console.log(getTimeToNewYear());

