import { Calendar } from "./calender.js";
import { AddBtnWithTime } from "./getListTime.js";

const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", addObjectMeeting);

function addObjectMeeting(visibleBtnMeeting) {
   
AddBtnWithTime.call(this, visibleBtnMeeting);  
    
let arrayObjectsForm = [];
let meetingForm = {};
meetingForm.nameUser = document.querySelector(".name").value;
meetingForm.email = document.querySelector(".email").value; 
meetingForm.tel = document.querySelector(".tel").value;
meetingForm.select = document.querySelector(".select").value; 
meetingForm.textArea = document.querySelector(".text-area").value; 

arrayObjectsForm.push(visibleBtnMeeting, meetingForm);
console.log(arrayObjectsForm);
//document.querySelector(".form-meeting").reset();
alert("Meeting successfully added");

}
 
export { addObjectMeeting }