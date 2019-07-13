import { Calendar } from "./calender.js";
import { ChangeMonth } from "./changeMonth.js";
import { AddBtnWithTime } from "./getListTime.js";

const calendar = new Calendar(
  "table",
  new Date().getFullYear(),
  new Date().getMonth()
);
const changeMonth = new ChangeMonth();

