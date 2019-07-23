import { AddBtnWithTime, dateClick } from "./getListTime.js";
import { addForm, timeClick } from "./addForm.js";
  
  const btnForm = document.querySelector(".btn-form");
  btnForm.addEventListener("click", elem => {
  
  let dateTimeClick = dateClick + " / " + timeClick;
  let meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.textArea = document.querySelector(".text-area").value;

  localStorage.setItem(JSON.stringify(dateTimeClick), JSON.stringify(meetingForm));

  let returnObj = JSON.parse(localStorage.getItem(JSON.stringify(dateTimeClick)));

 });

function addObjectMeeting() {};

export { addObjectMeeting };
