import { Calendar } from "./calender.js";
import { AddBtnWithTime, arrayObjectsForm, meetingForm, dateClick } from "./getListTime.js";
import { addForm, tiemClick } from './addForm.js';

const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", (elem) => {
  addObjectMeeting();
  elem.preventDefault();
  localStorage["arrayObjectsForm"] = JSON.stringify(meetingForm.time);
  localStorage["arrayObjectsForm"] = JSON.stringify(meetingForm.date);   
  localStorage["arrayObjectsForm"] = JSON.stringify(meetingForm);
  console.log(JSON.stringify(meetingForm));
});

arrayObjectsForm;

function addObjectMeeting() {

  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.select = document.querySelector(".select").value;
  meetingForm.textArea = document.querySelector(".text-area").value;

  arrayObjectsForm.push(meetingForm);

  console.log(arrayObjectsForm);

  if (meetingForm.date === dateClick && meetingForm.time === tiemClick) {
    alert('you win');    
  } 
  console.log(meetingForm.date, meetingForm.time, dateClick, tiemClick);


  
}


export { addObjectMeeting };
