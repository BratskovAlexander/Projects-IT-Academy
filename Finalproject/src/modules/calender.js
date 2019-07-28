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

const htmlElements = {};
htmlElements.yearNow = document.getElementById("header-calender").appendChild(pForYear),
htmlElements.monthNow = document.getElementById("header-calender").appendChild(pForMonth),
htmlElements.nowMonthInHeadTable = document.querySelector("thead tr th[colspan]");

function checkDateForPast(year, month, date) {
  let currentDate = new Date();
  if (parseInt(year) < currentDate.getFullYear()) {
    return true;
  }
  if (parseInt(month) < currentDate.getMonth()) {
    return true;
  }
  if (
    parseInt(month) === currentDate.getMonth() &&
    parseInt(date) < currentDate.getDate()
  ) {
    return true;
  }
  return false;
}

function Calendar(year, month) {
  this.render(year, month);
 };

Calendar.prototype.changeMonth = function() {
  
  const htmlElements = {
  btnPrevious: document.querySelector("thead tr th"),
  btnNext: document.querySelector("thead tr th:last-child")
};

htmlElements.btnPrevious.addEventListener("click", function() {
  let element = document.getElementById("body-table");
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
  Calendar.prototype.render(document.querySelector("p").dataset.year, parseInt(document.querySelector("p:nth-child(2)").dataset.month) - 1);
});

htmlElements.btnNext.addEventListener("click", function() {
  let element = document.getElementById("body-table");
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
  Calendar.prototype.render(document.querySelector("p").dataset.year, parseInt(document.querySelector("p:nth-child(2)").dataset.month) + 1);
});
}


Calendar.prototype.render = function(year, month) {
  let dayFirst = new Date(year, month, 1); //Первое число
  let lastDayMonth = new Date(year, month + 1, 0).getDate(); //Последний день меясца
  const lastDayInfo = new Date(year, month, lastDayMonth); // ифно последнего дня месяца
  let firstDayMonth = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), 1).getDay(); //первый день месяца

  if (month == 12) {
    month = 0;
    year = Number(year) + 1;
  } //Выводим Январь после декабря

  if (month == -1) {
    month = 11;
    year = Number(year) - 1;
  } //Выводим декабрь после января

  htmlElements.yearNow.innerHTML = `Current Year: ${year}`; //Вывели текущий год
  htmlElements.monthNow.innerHTML = `Current Month: ${arrayMonth[month]}` ; //Вывели текущий месяц
  htmlElements.nowMonthInHeadTable.innerHTML = arrayMonth[month]; //Вывели текущий месяц в шапку таблицы

  document.querySelector("p").dataset.year = lastDayInfo.getFullYear();
  document.querySelector(
    "p:nth-child(2)"
  ).dataset.month = lastDayInfo.getMonth();

   if (firstDayMonth == 0) {
    firstDayMonth = 7;
  }

  let countWeek = 0;
  while (dayFirst.getMonth() === month) {
    let tr = document.createElement("tr");
    for (let dayWeek = 0; dayWeek < 7; dayWeek++) {
      let td = document.createElement("td");
      if (countWeek === 0 && dayWeek < firstDayMonth - 1) {
        td.innerText = "";
        tr.appendChild(td);
      } else {
        td.addEventListener("click", AddBtnWithTime);
        td.innerText = dayFirst.getDate();

        if (checkDateForPast(year, month, dayFirst.getDate()) || dayWeek >= 5 ) {
          td.setAttribute("disabled", true);
          td.setAttribute("title", "На эту дату нету встреч");
          td.classList.add("pastDate");
        }

        tr.appendChild(td);
        dayFirst.setDate(dayFirst.getDate() + 1);
      }
      if (dayFirst.getMonth() !== month) {
        break;
      }
    }
    document.getElementById("body-table").appendChild(tr);
    countWeek++;
  }
}


export { Calendar, checkDateForPast };
