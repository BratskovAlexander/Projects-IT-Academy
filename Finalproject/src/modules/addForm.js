import { AddBtnWithTime, arrayObjectsForm, meetingForm } from "./getListTime.js";

let tiemClick;

function addForm() {
  tiemClick = `${this.innerText}`
  const timeMeeting = document.querySelector(".fullName p:nth-child(3)");
  timeMeeting.innerText = `Время: ${this.innerText}`;

  meetingForm.time = this.innerText;

  
  // localStorage["arrayObjectsForm"] = JSON.stringify(meetingForm.time);
  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.add("none");
  getBtnMeeting.innerHTML = "";
  const form = document.querySelector(".form-meeting");
  form.classList.remove("none");
}


export { addForm, tiemClick };
