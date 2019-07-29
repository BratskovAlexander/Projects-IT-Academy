import { checkDateForPast } from "./calender.js";

const htmlElements = {};
htmlElements.nowDate = document.querySelector(".fullName p:nth-child(2)");
htmlElements.infoAboutMe = document.querySelector(".page-info-about div.infoAboutMe");
htmlElements.getBtnMeeting = document.getElementById("btns-meeting");
htmlElements.form = document.querySelector(".form-meeting");


let dateClick;

function checkForKey(key) {

  if (localStorage.getItem(key) === null) {
    return false;
  }
  return true;
}




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

function AddBtnWithTime() {
   
  htmlElements.choosedYear = document.querySelector("#header-calender > p:nth-child(1)");
  htmlElements.choosedMonth = document.querySelector("#header-calender > p:nth-child(2)");
    
  let choosedDay = this.innerText;
  let choosedDate = new Date(htmlElements.choosedYear.dataset.year, htmlElements.choosedMonth.dataset.month, choosedDay );

  if (checkDateForPast(htmlElements.choosedYear.dataset.year, htmlElements.choosedMonth.dataset.month, choosedDay) || choosedDate.getDay() === 0 || choosedDate.getDay() === 6 ) {
    return;
  }

  dateClick = `${choosedDay}.${htmlElements.choosedMonth.dataset.month}.${htmlElements.choosedYear.dataset.year}`;

  htmlElements.nowDate.innerText = `Выбранная дата: ${dateClick}`;
  htmlElements.infoAboutMe.classList.add("none");
  htmlElements.getBtnMeeting.classList.remove("none");
  htmlElements.getBtnMeeting.innerText = "";
  htmlElements.form.classList.add("none");

  let arrayBtnTime = [];
  let timeToBtn = 9;

  for (let i = 0; i < 8; ++i) {
    const btnMeeting = document.createElement("button");
    btnMeeting.addEventListener("click", addForm);
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00-${timeToBtn + 1}.00`;

    if (checkForKey(JSON.stringify(dateClick + " / " + btnMeeting.innerText))) {
      btnMeeting.setAttribute("disabled", true);
      btnMeeting.setAttribute("title", "Эта время занята");
    }
    htmlElements.getBtnMeeting.appendChild(btnMeeting);
    arrayBtnTime[i] = btnMeeting;
    ++timeToBtn;
  }
}

let timeClick;



// const meetingForm = {};
  // meetingForm.nameUser = document.querySelector(".name");
  // meetingForm.email = document.querySelector(".email");
  // meetingForm.tel = document.querySelector(".tel");
  // meetingForm.textArea = document.querySelector(".text-area");

function addObjectMeeting() {
  htmlElements.btnForm = document.querySelector(".btn-form");
  htmlElements.btnForm.addEventListener("click", () => {
  const dateTimeClick = dateClick + " / " + timeClick;
  const meetingForm = {};
  meetingForm.nameUser = document.querySelector(".name").value;
  meetingForm.email = document.querySelector(".email").value;
  meetingForm.tel = document.querySelector(".tel").value;
  meetingForm.textArea = document.querySelector(".text-area").value;
  // meetingForm.nameUser.value;
  // meetingForm.email.value;
  // meetingForm.tel.value;
  // meetingForm.textArea.value;

    localStorage.setItem(
    JSON.stringify(dateTimeClick),
    JSON.stringify(meetingForm)
  );

  postData('https://my-first-backend-experience.herokuapp.com/dataTimeMeeting', {dateTimeClick: dateTimeClick, meetingForm: meetingForm})
  .then(data => console.log(JSON.stringify(data))) // JSON-строка полученная после вызова `response.json()`
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Значения по умолчанию обозначены знаком *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.json()); // парсит JSON ответ в Javascript объект
}

});
}

addObjectMeeting()

export { AddBtnWithTime, addObjectMeeting };
