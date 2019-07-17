function addForm() {
  const timeMeeting = document.querySelector(".fullName p:nth-child(3)");
  timeMeeting.innerText = `Время: ${this.innerText}`;

  const arrayBtnMeeting = [];
  arrayBtnMeeting.time = this.innerText;
  localStorage["arrayBtnMeeting"] = JSON.stringify(arrayBtnMeeting.time);

  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.add("none");
  getBtnMeeting.innerHTML = "";
  const form = document.querySelector(".form-meeting");
  form.classList.remove("none");
}

export { addForm };
