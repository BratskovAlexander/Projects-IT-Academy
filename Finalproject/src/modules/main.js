import { Calendar } from "./calender.js";
import { ChangeMonth } from "./changeMonth.js";
import { AddBtnWithTime } from "./getListTime.js";
import { addObjectMeeting } from './addObjectMeeting.js';


const calendar = new Calendar(
  "table",
  new Date().getFullYear(),
  new Date().getMonth()
);
const changeMonth = new ChangeMonth();

const htmlElements = {};

htmlElements.btnHome = document.querySelector('span').addEventListener('click', () => {
  window.location.reload();
})

