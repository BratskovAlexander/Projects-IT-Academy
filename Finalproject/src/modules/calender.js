import { AddBtnWithTime } from "./getListTime.js";

const pForYear = document.createElement("p"); //абзац для года
const pForMonth = document.createElement("p"); //абзац для месяца

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

function Calendar(id, year, month) {
  let dayFirst = new Date(year, month, 1);
  let lastDayMonth = new Date(year, month + 1, 0).getDate(); //Последний день меясца
  const lastDayInfo = new Date(year, month, lastDayMonth); // ифно последнего дня месяца
  let firstDayMonth = new Date(
    lastDayInfo.getFullYear(),
    lastDayInfo.getMonth(),
    1
  ).getDay(); //первый день месяца
  const yearNow = (document
    .getElementById("header-calender")
    .appendChild(pForYear).innerHTML = `Now Year: ${year}`); //Вывели текущий год

  if (month == 12) {
    month = 0;
  }
  if (month == -1) {
    month = 11;
  }

  const monthNow = (document
    .getElementById("header-calender")
    .appendChild(pForMonth).innerHTML = `Now Month: ${arrayMonth[month]}`); //Вывели текущий месяц

  const nowMonthInHeadTable = (document.querySelector(
    "thead tr th[colspan]"
  ).innerHTML = arrayMonth[month]); //Вывели текущий месяц в шапку таблицы

  document.querySelector("p").dataset.year = lastDayInfo.getFullYear();
  document.querySelector(
    "p:nth-child(2)"
  ).dataset.month = lastDayInfo.getMonth();

  if (firstDayMonth == 0) {
    firstDayMonth = 7;
  }

  let countWeek = 0;
  while (dayFirst.getMonth() == month) {
    let tr = document.createElement("tr");
    for (let dayWeek = 0; dayWeek < 7; dayWeek++) {
      let td = document.createElement("td");
      td.addEventListener("click", AddBtnWithTime);
      if (countWeek == 0 && dayWeek < firstDayMonth - 1) {
        td.innerText = "";
        tr.appendChild(td);
      } else {
        td.innerText = dayFirst.getDate();
        tr.appendChild(td);
        dayFirst.setDate(dayFirst.getDate() + 1);
      }
      if (dayFirst.getMonth() != month) {
        break;
      }
    }
    document.getElementById("body-table").appendChild(tr);
    countWeek++;
  }
  // while (dayWeek < 7) {
  //   let td = document.createElement("td");
  //   td.addEventListener("click", AddBtnWithTime);

  //   if (countWeek == 0) {

  //     if (dayWeek < firstDayMonth - 1) {
  //       td.innerText = "";
  //       tr.appendChild(td);
  //     } else {
  //       td.innerText = dayFirst.getDate();
  //       tr.appendChild(td);
  //       dayFirst.setDate(dayFirst.getDate() + 1);
  //     }
  //   } else {
  //   td.innerText = dayFirst.getDate();
  //     tr.appendChild(td);
  //     dayFirst.setDate(dayFirst.getDate() + 1);
  //   }

  //   if (dayFirst.getMonth() != month) {
  //     break;
  //   }

  //   dayWeek++;
  // }

  // }
}

export { Calendar };
