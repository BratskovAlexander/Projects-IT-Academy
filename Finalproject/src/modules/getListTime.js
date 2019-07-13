function AddBtnWithTime() {
  const infoAboutMe = document.querySelector(
    ".page-info-about div.infoAboutMe"
  );
  infoAboutMe.classList.add("none");
  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.remove("none");

  let arrayBtnTime = [1, 2, 3, 4, 5, 6, 7, 8];

  let startTimeToBtn = 8;

  arrayBtnTime.forEach(() => {
    const btnMeeting = document.createElement("button");
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = `${timeToBtn}.00 - ${timeToBtn + 1}.00`;
    getBtnMeeting.appendChild(btnMeeting);
    timeToBtn++;
  });
}

const btnTime = document.querySelector("#btns-meeting .button-meeting button");
if (btnTime != null) {
  function addForm() {
    const form = document.querySelector(".form-meeting");
    form.classList.remove("none");
    btnTime.addEventListener("click", addForm);
  }
}

export { AddBtnWithTime };
