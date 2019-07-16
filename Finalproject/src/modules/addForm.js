
function addForm() {
    const getBtnMeeting = document.getElementById("btns-meeting");
    getBtnMeeting.classList.add("none");
    getBtnMeeting.innerHTML = "";
    const form = document.querySelector(".form-meeting");
    form.classList.remove("none");
    console.log(`${this.innerText}`);
  }

  export { addForm }