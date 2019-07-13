import { Calendar } from "./calender.js";
import { AddBtnWithTime } from "./getListTime.js";

// function getNowDay(this) {
//     let nowDay = this;
// }

const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener("click", addObjectMeeting);



  
function addObjectMeeting() {
let arrayObjectsForm = [];
let meeting = {}
meeting.nameUser = document.querySelector(".name").value;
meeting.email = document.querySelector(".email").value; 
meeting.tel = document.querySelector(".tel").value;
meeting.select = document.querySelector(".select").value; 
meeting.textArea = document.querySelector(".text-area").value; 
arrayObjectsForm.push(meeting);




console.log(arrayObjectsForm);

}
 

 
export { addObjectMeeting }