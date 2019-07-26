import { Calendar, checkDateForPast } from "./calender.js";
import { addForm } from "./addForm.js";

const htmlElenents = {};
htmlElenents.choosedMonth = document.querySelector("#header-calender > p:nth-child(2)");
htmlElenents.choosedYear = document.querySelector("#header-calender > p:nth-child(1)");
htmlElenents.nowDate = document.querySelector(".fullName p:nth-child(2)");
htmlElenents.infoAboutMe = document.querySelector(".page-info-about div.infoAboutMe");
htmlElenents.getBtnMeeting = document.getElementById("btns-meeting");
htmlElenents.form = document.querySelector(".form-meeting");

function checkForKey(key) {

  if (localStorage.getItem(key) === null) {
    return false;
  }
  return true;
}

function AddBtnWithTime() {
  htmlElenents.choosedYear.dataset.year;
  htmlElenents.choosedMonth.dataset.month;
  
  let choosedDay = this.innerText;
  let choosedDate = new Date( choosedYear, choosedMonth, choosedDay );

  if (checkDateForPast(choosedYear, choosedMonth, choosedDay) || choosedDate.getDay() === 0 || choosedDate.getDay() === 6 ) {
    return;
  }

  let dateClick = `${choosedDay}.${choosedMonth}.${choosedYear}`;

  htmlElenents.nowDate.innerText = `Выбранная дата: ${dateClick}`;
  htmlElenents.infoAboutMe.classList.add("none");
  htmlElenents.getBtnMeeting.classList.remove("none");
  htmlElenents.getBtnMeeting.innerText = "";
  htmlElenents.form.classList.add("none");

  let arrayBtnTime = [];
  let timeToBtn = 9;

  for (let i = 0; i < 8; ++i) {
    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00-${timeToBtn + 1}.00`;
    if (checkForKey(JSON.stringify(dateClick + " / " + btnMeeting.innerText))) {
      btnMeeting.setAttribute("disabled", true);
      btnMeeting.setAttribute("title", "Эта время занята");
    }
    getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    ++timeToBtn;
  }
}

export { AddBtnWithTime, dateClick };
