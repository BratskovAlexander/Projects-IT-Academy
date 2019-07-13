function addForm() {
  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.add("none");
  getBtnMeeting.innerHTML = "";
  const form = document.querySelector(".form-meeting");
  form.classList.remove("none");
}

function AddBtnWithTime() {
  const infoAboutMe = document.querySelector(
    ".page-info-about div.infoAboutMe"
  );
  infoAboutMe.classList.add("none");

  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.remove("none");
  getBtnMeeting.innerHTML = "";

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
