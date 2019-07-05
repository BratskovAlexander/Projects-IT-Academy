import { Calendar} from './calender.js';

const calendar = new Calendar("table", 2019, 6);


// function Calendar2(id, year, month) {
//     let lastDay = new Date(year, month + 1, 0).getDate(); //последний день месяца
//     let lastDayInfo = new Date(year, month, lastDay);
//     // let DNlast = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), lastDay).getDay();
//     let firstDay = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), 1).getDay(); //первый день месяца
//     let calendar = '<tr>';
//     let arrayMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     console.log(firstDay);

//     if (firstDay != 0) {
//         for (var i = 1; i < firstDay; i++) calendar += '<td>';
//     } else {
//         for (var i = 0; i < 6; i++) calendar += '<td>';
//     }
//     for (var i = 1; i <= lastDay; i++) {
//         if (i == new Date().getDate() && lastDayInfo.getFullYear() == new Date().getFullYear() && lastDayInfo.getMonth() == new Date().getMonth()) {
//             calendar += '<td class="today">' + i;
//         } else {
//             calendar += '<td>' + i;
//         }
//         if (new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), i).getDay() == 0) {
//             calendar += '<tr>';
//         }
//     }

//     for (var i = 0; i < 7; i++) calendar += '<td>&nbsp;';
//     document.querySelector('#' + id + ' tbody').innerHTML = calendar;
//     document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = arrayMonth[lastDayInfo.getMonth()] + ' ' + lastDayInfo.getFullYear();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = lastDayInfo.getMonth();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = lastDayInfo.getFullYear();
//     if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
//         document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
//     }
// }
// Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// // переключатель минус месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
//     Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
// }
// // переключатель плюс месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
//     Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
// }
































// const pForYear = document.createElement("p"); //абзац для года
// const pForMonth = document.createElement("p"); //абзац для месяца

// const arrayMonth = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "Jule",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ]; //Массив для вывода названия месяца
// //debugger;
// function Calendar(id, year, month) {
//   let lastDayMonth = new Date(year, month + 1, 0).getDate(); //Последний день меясца
//   const lastDayInfo = new Date(year, month, lastDayMonth); // ифно последнего дня месяца
//   let firstDayInfo = new Date(
//     lastDayInfo.getFullYear(),
//     lastDayInfo.getMonth(),
//     1
//   );
//   let firstDay = firstDayInfo.getDay(); //первый день месяца

//   let tr = document.createElement("tr"); //Создали пустую
//   if (firstDay != 0) {
//     for (let i = 1; i < firstDay; i++) {
//       let td = document.createElement("td"); //Создали пустую ячейку
//       td.innerHTML = "";
//       tr.appendChild(td); //добавляем ячейку в строчку
//     }
//   } else {
//     for (let i = 0; i < 6; i++) {
//       let td = document.createElement("td"); //Создали пустую ячейку
//       td.innerHTML = "";
//       tr.appendChild(td); //добавляем ячейку в строчку
//     }
//   }

//   while (firstDayInfo.getDate() < lastDayMonth) {
//     // цикл для месяца
//     let dayOfWeek = 0;

//     // while (dayOfWeek < 7) {
//       //цикл для недели
//       const td = document.createElement("td"); //Создали пустую ячейку
//       td.innerHTML = firstDayInfo.getDate(); //кладем в ячейку число
//       let tr = document.createElement("tr"); //Создали пустую
//       tr.appendChild(td); //добавляем ячейку в строчку

//       console.log(tr);
//       console.log(td);
//       if (firstDayInfo.getDate() == lastDayMonth) {
//         //Условие чтобы остановить цикл, если закончиться месяц
//         break;
//       }
//       firstDayInfo.setDate(firstDayInfo.getDate() + 1); //Добавляем следующую дату

//       dayOfWeek++; //добавляем день в неделю

//       document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
//       console.log(tr);
//     // }
//     document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
//   }
// }
// Calendar("table", 2019, 8);

// const year = (document
//     .getElementById("header-calender")
//     .appendChild(pForYear).innerHTML = `Now Year: ${year}`); //Вывели текущий год

//   const month = (document
//     .getElementById("header-calender")
//     .appendChild(pForMonth).innerHTML = `Now Month: ${arrayMonth[month]}`); //Вывели текущий месяц

//   const nowMonthInHeadTable = (document.querySelector(
//     "thead tr td[colspan]"
//   ).innerHTML = arrayMonth[month]); //Вывели текущий месяц в шапку таблицы

// function changeNextMonth() {
//   nowMonth = new Date(nowYear, nowMonth, 1);
//   console.log(nowMonth);
// }
// changeNextMonth();

// const htmlElements = {
//   btnBackMonth: document.querySelector("#table thead tr td"),
//   btnNextMonth: document.querySelector("#table thead tr td:nth-child(3)")
// };

// htmlElements.btnBackMonth.addEventListener("click", function() {
//   alert("back Month");
// });
// htmlElements.btnNextMonth.addEventListener("click", function() {
//   alert("next Month");
// });

// console.log();

//export { Calendar };
