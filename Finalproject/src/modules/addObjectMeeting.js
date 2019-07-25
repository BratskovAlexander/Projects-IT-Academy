import { AddBtnWithTime, dateClick } from "./getListTime.js";
import { addForm, timeClick } from "./addForm.js";

function addObjectMeeting() {
  const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", () => {
  const dateTimeClick = dateClick + " / " + timeClick;
  const meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.textArea = document.querySelector(".text-area").value;

  localStorage.setItem(
    JSON.stringify(dateTimeClick),
    JSON.stringify(meetingForm)
  );
});
}
addObjectMeeting();

export { addObjectMeeting }