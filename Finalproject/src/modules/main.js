import { Calendar, checkDateForPast } from "./calender.js";
import { addObjectMeeting } from './addObjectMeeting.js';
import { getUsers } from './localStorage.service.js';

const htmlElements = {};
htmlElements.btnHome = document.querySelector('span').addEventListener('click', () => {
  window.location.reload();
})

const calendar = new Calendar(
  "table",
  new Date().getFullYear(),
  new Date().getMonth()
);


calendar.changeMonth();
addObjectMeeting();
getUsers();


