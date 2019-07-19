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

let arrayObjectsForm = [];
let meetingForm = {};
let dateClick;


function AddBtnWithTime() {
  dateClick = `${this.innerText}.${
    document.querySelector("#header-calender > p:nth-child(2)").dataset.month
  }.${
    document.querySelector("#header-calender > p:nth-child(1)").dataset.year
  }`;

  meetingForm.date = `${this.innerText}.${
      document.querySelector("#header-calender > p:nth-child(2)").dataset.month
    }.${
      document.querySelector("#header-calender > p:nth-child(1)").dataset.year
    }`;

    localStorage["arrayObjectsForm"] = JSON.stringify(meetingForm.date);    

  let nowDate = document.querySelector(".fullName p:nth-child(2)");
  nowDate.innerText = `Выбранная дата: ${meetingForm.date}`;

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

  for (let i = 1; i < 9; i++) {
    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add(`button-meeting${i}`);
    btnMeeting.innerText = `${timeToBtn}.00 - ${timeToBtn + 1}.00`;
    getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    timeToBtn++;
  }
}

export { AddBtnWithTime, arrayObjectsForm, meetingForm, dateClick };
