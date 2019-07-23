import { Calendar, checkDateForPast } from "./calender.js";
import { addForm } from "./addForm.js";

let dateClick;

function checkForKey(key) {
  if (localStorage.getItem(key) === null) {
    return false;
  }
  return true;
}

function AddBtnWithTime() {
  let choosedDay = this.innerText;
  let choosedMonth = document.querySelector("#header-calender > p:nth-child(2)")
    .dataset.month;
  let choosedYear = document.querySelector("#header-calender > p:nth-child(1)")
    .dataset.year;
  let choosedDate = new Date( choosedYear, choosedMonth, choosedDay );
  if (checkDateForPast(choosedYear, choosedMonth, choosedDay) || choosedDate.getDay() === 0 || choosedDate.getDay() === 6 ) {
    return;
  }

  dateClick = `${choosedDay}.${choosedMonth}.${choosedYear}`;

  let nowDate = document.querySelector(".fullName p:nth-child(2)");
  nowDate.innerText = `Выбранная дата: ${dateClick}`;

  const infoAboutMe = document.querySelector(
    ".page-info-about div.infoAboutMe"
  );
  infoAboutMe.classList.add("none");

  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.remove("none");
  getBtnMeeting.innerText = "";

  const form = document.querySelector(".form-meeting");
  form.classList.add("none");

  let arrayBtnTime = [];
  let timeToBtn = 9;

  for (let i = 0; i < 8; ++i) {
    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00-${timeToBtn + 1}.00`;
    if (checkForKey(JSON.stringify(dateClick + " / " + btnMeeting.innerText))) {
      btnMeeting.setAttribute("disabled", true);
      btnMeeting.setAttribute("title", "Сорян, занято");
    }
    getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    ++timeToBtn;
  }
}

export { AddBtnWithTime, dateClick };
