import { Calendar, checkDateForPast } from "./calender.js";
import { addForm } from "./addForm.js";

const htmlElements = {};
htmlElements.nowDate = document.querySelector(".fullName p:nth-child(2)");
htmlElements.infoAboutMe = document.querySelector(".page-info-about div.infoAboutMe");
htmlElements.getBtnMeeting = document.getElementById("btns-meeting");
htmlElements.form = document.querySelector(".form-meeting");


let dateClick;

function checkForKey(key) {

  if (localStorage.getItem(key) === null) {
    return false;
  }
  return true;
}

function AddBtnWithTime() {
   
  htmlElements.choosedYear = document.querySelector("#header-calender > p:nth-child(1)");
  htmlElements.choosedMonth = document.querySelector("#header-calender > p:nth-child(2)");
    
  let choosedDay = this.innerText;
  let choosedDate = new Date(htmlElements.choosedYear.dataset.year, htmlElements.choosedMonth.dataset.month, choosedDay );

  if (checkDateForPast(htmlElements.choosedYear.dataset.year, htmlElements.choosedMonth.dataset.month, choosedDay) || choosedDate.getDay() === 0 || choosedDate.getDay() === 6 ) {
    return;
  }

  dateClick = `${choosedDay}.${htmlElements.choosedMonth.dataset.month}.${htmlElements.choosedYear.dataset.year}`;

  htmlElements.nowDate.innerText = `Выбранная дата: ${dateClick}`;
  htmlElements.infoAboutMe.classList.add("none");
  htmlElements.getBtnMeeting.classList.remove("none");
  htmlElements.getBtnMeeting.innerText = "";
  htmlElements.form.classList.add("none");

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
    htmlElements.getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    ++timeToBtn;
  }
}

export { AddBtnWithTime, dateClick, htmlElements };
