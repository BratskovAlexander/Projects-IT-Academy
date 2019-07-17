import "./calender.js";
import { addForm } from "./addForm.js";

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
];


function AddBtnWithTime() {
  document.querySelector(".page-info-about div.infoAboutMe").innerHTML = ('');

  const visibleBtnMeeting = [];
    visibleBtnMeeting.selectedYear = document.querySelector("#header-calender > p:nth-child(1)").dataset.year,
    visibleBtnMeeting.selectedMonth = document.querySelector("#header-calender > p:nth-child(2)").dataset.month,
    visibleBtnMeeting.selectedDate = this.innerText

  // localStorage["visibleBtnMeeting"] = JSON.stringify(visibleBtnMeeting.selectedMonth);
  localStorage["visibleBtnMeeting"] = JSON.stringify(visibleBtnMeeting.selectedDate);

  let nowDate = document.querySelector(".fullName p:nth-child(2)");
  nowDate.innerText = `Выбранная дата: ${
    visibleBtnMeeting.selectedDate
  } ${arrayMonth[visibleBtnMeeting.selectedMonth]} ${
    visibleBtnMeeting.selectedYear
  }`;

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

  for (let i = 0; i < 8; i++) {

    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00 - ${timeToBtn + 1}.00`;
    getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    timeToBtn++;

    let arrayBtnMeetingFromStorage = JSON.parse(localStorage["arrayBtnMeeting"]);
    let visibleBtnMeetingFromStorage = JSON.parse(localStorage["visibleBtnMeeting"]);
    console.log(visibleBtnMeetingFromStorage);

    if (arrayBtnMeetingFromStorage !== null) {
      const form = document.querySelector(".button-meeting");
      form.classList.add("none");
  }

  }
}

export { AddBtnWithTime };
