import { Calendar } from "./calender.js";
import { AddBtnWithTime } from "./getListTime.js";

const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", addObjectMeeting);

function addObjectMeeting() {
  let arrayObjectsForm = [];
  let meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.select = document.querySelector(".select").value;
  meetingForm.textArea = document.querySelector(".text-area").value;

  arrayObjectsForm.push(meetingForm);
  localStorage["arrayObjectsForm"] = JSON.stringify(arrayObjectsForm);

  let a = JSON.parse(localStorage["arrayObjectsForm"]);
  console.log(a);

  alert("Meeting successfully added");
}

export { addObjectMeeting };
