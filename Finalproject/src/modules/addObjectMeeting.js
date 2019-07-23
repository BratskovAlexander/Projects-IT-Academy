// import { Calendar } from "./calender.js";
import { AddBtnWithTime, dateClick } from "./getListTime.js";
import { addForm, timeClick } from "./addForm.js";

  const btnForm = document.querySelector(".btn-form");
  btnForm.addEventListener("click", elem => {
  elem.preventDefault();
  let dateTimeClick = dateClick + "/" + timeClick;
  let meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.textArea = document.querySelector(".text-area").value;
 

  JSON.stringify(meetingForm);
  localStorage.setItem(
    JSON.stringify(dateTimeClick),
    JSON.stringify(meetingForm)
  );

  let returnObj = JSON.parse(
    localStorage.getItem(JSON.stringify(dateTimeClick))
  );
  
  if (`"${dateTimeClick}"` === JSON.stringify(dateTimeClick) ) {
    alert(2)
    //document.querySelector("button").setAttribute('disabled');
  }

});

function addObjectMeeting() {
 
}

export { addObjectMeeting };
