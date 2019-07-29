import { checkDateForPast } from "./calender.js";

const htmlElements = {};
htmlElements.nowDate = document.querySelector(".fullName p:nth-child(2)");
htmlElements.infoAboutMe = document.querySelector(
  ".page-info-about div.infoAboutMe"
);
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
  htmlElements.choosedYear = document.querySelector(
    "#header-calender > p:nth-child(1)"
  );
  htmlElements.choosedMonth = document.querySelector(
    "#header-calender > p:nth-child(2)"
  );

  let choosedDay = this.innerText;
  let choosedDate = new Date(
    htmlElements.choosedYear.dataset.year,
    htmlElements.choosedMonth.dataset.month,
    choosedDay
  );

  if (
    checkDateForPast(
      htmlElements.choosedYear.dataset.year,
      htmlElements.choosedMonth.dataset.month,
      choosedDay
    ) ||
    choosedDate.getDay() === 0 ||
    choosedDate.getDay() === 6
  ) {
    return;
  }

  dateClick = `${choosedDay}.${htmlElements.choosedMonth.dataset.month}.${
    htmlElements.choosedYear.dataset.year
  }`;

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

function addObjectMeeting() {
  htmlElements.btnForm = document.querySelector(".btn-form");
  htmlElements.btnForm.addEventListener("click", () => {
    const dateTimeClick = dateClick + " / " + timeClick;
    const meetingForm = {};
    meetingForm.nameUser = document.querySelector(".name").value;
    meetingForm.email = document.querySelector(".email").value;
    meetingForm.tel = document.querySelector(".tel").value;
    meetingForm.textArea = document.querySelector(".text-area").value;

    localStorage.setItem(
      JSON.stringify(dateTimeClick),
      JSON.stringify(meetingForm)
    );

    postData(
      "https://my-first-backend-experience.herokuapp.com/dataTimeMeeting",
      { dateTimeClick: dateTimeClick, meetingForm: meetingForm }
    )
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));

    function postData(url = "", data = {}) {
      return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      }).then(response => response.json());
    }
  });
}

addObjectMeeting();

export { AddBtnWithTime, addObjectMeeting };
