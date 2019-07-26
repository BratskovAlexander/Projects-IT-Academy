import { AddBtnWithTime, dateClick, htmlElements} from "./getListTime.js";



let timeClick;

function addForm() {

  htmlElements.timeMeeting = document.querySelector(".fullName p:nth-child(3)");
  htmlElements.form = document.querySelector(".form-meeting");
  htmlElements.dateTime = document.getElementById("dateTime");
  htmlElements.getBtnMeeting = document.getElementById("btns-meeting");
  timeClick = `${this.innerText}`;
  htmlElements.dateTime.setAttribute("value", `${dateClick + "/" + timeClick}`);
  htmlElements.timeMeeting.innerText = `Время: ${this.innerText}`;
  htmlElements.getBtnMeeting.classList.add("none");
  htmlElements.getBtnMeeting.innerHTML = "";
  htmlElements.form.classList.remove("none");
}


export { addForm, timeClick };
