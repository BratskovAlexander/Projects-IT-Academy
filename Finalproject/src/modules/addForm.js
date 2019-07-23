import { AddBtnWithTime, dateClick} from "./getListTime.js";

let timeClick;

function addForm() {
  timeClick = `${this.innerText}`;
  document.getElementById("dateTime").setAttribute("value", `${dateClick + "/" + timeClick}`);
  const timeMeeting = document.querySelector(".fullName p:nth-child(3)");
  timeMeeting.innerText = `Время: ${this.innerText}`;
  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.add("none");
  getBtnMeeting.innerHTML = "";
  const form = document.querySelector(".form-meeting");
  form.classList.remove("none");
}


export { addForm, timeClick };
