import "./users.servise.js";
import { Calendar } from "./calender.js";
import "./getMeeting.js";

const htmlElements = {};
htmlElements.btnHome = document
  .querySelector("span")
  .addEventListener("click", () => {
    window.location.reload();
  });
htmlElements.checkList = document.querySelector(".check-meeting-list");

const calendar = new Calendar(new Date().getFullYear(), new Date().getMonth());

calendar.changeMonth();
