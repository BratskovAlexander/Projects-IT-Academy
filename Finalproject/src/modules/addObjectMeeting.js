import { AddBtnWithTime, dateClick, htmlElements } from "./getListTime.js";
import { addForm, timeClick } from "./addForm.js";




const meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name");
  meetingForm.email = document.querySelector(".email");
  meetingForm.tel = document.querySelector(".tel");
  meetingForm.textArea = document.querySelector(".text-area");

function addObjectMeeting() {
  htmlElements.btnForm = document.querySelector(".btn-form");
  htmlElements.btnForm.addEventListener("click", () => {
  const dateTimeClick = dateClick + " / " + timeClick;

  meetingForm.nameUser.value;
  meetingForm.email.value;
  meetingForm.tel.value;
  meetingForm.textArea.value;
  
  localStorage.setItem(
    JSON.stringify(dateTimeClick),
    JSON.stringify(meetingForm)
  );
});
}
addObjectMeeting();

export { addObjectMeeting }