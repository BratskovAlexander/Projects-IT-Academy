import "./calender.js";
import { addForm } from './addForm.js';

function AddBtnWithTime(visibleBtnMeeting) {

this.visibleBtnMeeting = visibleBtnMeeting;
visibleBtnMeeting = {
  selectedYear: document.querySelector("#header-calender > p:nth-child(1)").dataset.year,
  selectedMonth: document.querySelector("#header-calender > p:nth-child(2)").dataset.month,
  selectedDate: this.innerText,
 };


  let nowDate = document.querySelector(".fullName p:nth-child(2)");
 nowDate.innerText = (`Выбранная дата: ${visibleBtnMeeting.selectedDate}.${Number(visibleBtnMeeting.selectedMonth) + 1}.${visibleBtnMeeting.selectedYear}`);
 //nowDate.appendChild();


  const infoAboutMe = document.querySelector(
    ".page-info-about div.infoAboutMe"
  );
  infoAboutMe.classList.add("none");

  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.remove("none");
  getBtnMeeting.innerText = "";

  const form = document.querySelector(".form-meeting");
  form.classList.add("none");

  let arrayBtnTime = [1, 2, 3, 4, 5, 6, 7, 8];

  let timeToBtn = 8;

  arrayBtnTime.forEach(() => {
    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00 - ${timeToBtn + 1}.00`;
    getBtnMeeting.appendChild(btnMeeting);
    timeToBtn++;
  
  });



}

export { AddBtnWithTime };
