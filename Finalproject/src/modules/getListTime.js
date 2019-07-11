function addBtnWithTime() {
  const infoAboutMe = document.querySelector(".page-info-about div.infoAboutMe");
  infoAboutMe.classList.add("none");
  const getBtnMeeting = document.getElementById("btns-meeting");
  getBtnMeeting.classList.remove("none");

  let arrayBtnTime = [1, 2, 3, 4, 5, 6, 7, 8];

  arrayBtnTime.forEach(() => {
    const btnMeeting = document.createElement("button");
    btnMeeting.classList.add("button-meeting");
    btnMeeting.innerText = ("time meeting")
    getBtnMeeting.appendChild(btnMeeting);
  });
}

function GetListTime() {
  let getDayMonth = document.querySelectorAll("td");

  getDayMonth.forEach(function(elem) {
    elem.addEventListener("click", addBtnWithTime);
  });
}

export { GetListTime };
