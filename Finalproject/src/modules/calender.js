const nowDate = new Date(); //текущая полная дата и время
const nowDay = nowDate.getDay(); //текущее число
let nowMonth = nowDate.getMonth(); //текущее число месяца -1
const nowYear = nowDate.getFullYear(); // текущий год
const pForYear = document.createElement("p"); //абзац для года
const pForMonth = document.createElement("p"); //абзац для месяца
const firstDayInfo = new Date(nowYear, nowMonth, 1); // ифно первого дня месяца
let firstDayMonth = firstDayInfo.getDate(); //Первый день месяца
const lastDayInfo = new Date(nowYear, nowMonth + 1, 0); // ифно последнего дня месяца
let lastDayMonth = lastDayInfo.getDate(); //Последний день меясца

const arrayMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December"
]; //Массив для вывода названия месяца

const year = (document
  .getElementById("header-calender")
  .appendChild(pForYear).innerHTML = `Now Year: ${nowYear}`); //Вывели текущий год

const month = (document
  .getElementById("header-calender")
  .appendChild(pForMonth).innerHTML = `Now Month: ${arrayMonth[nowMonth]}`); //Вывели текущий месяц

const nowMonthInHeadTable = (document.querySelector(
  "thead tr td[colspan]"
).innerHTML = arrayMonth[nowMonth]); //Вывели текущий месяц в шапку таблицы

function Calendar() {
    
  while (firstDayInfo.getDate() < lastDayMonth) {
    // цикл для месяца
    let dayOfWeek = 0;
    const tr = document.createElement("tr"); //Создали пустую строку
    while (dayOfWeek < 7) {
      //цикл для недели
      const td = document.createElement("td"); //Создали пустую ячейку
      td.innerHTML = firstDayInfo.getDate(); //кладем в ячейку число
      tr.appendChild(td); //добавляем ячейку в строчку
      if (firstDayInfo.getDate() == lastDayMonth) {
        //Условие чтобы остановить цикл, если закончиться месяц
        break;
      }
      firstDayInfo.setDate(firstDayInfo.getDate() + 1); //Добавляем следующую дату

      dayOfWeek++; //добавляем день в неделю
    }

    document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
  }
}


export { Calendar };
