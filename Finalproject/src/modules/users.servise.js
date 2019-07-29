const htmlElements = {};

htmlElements.userLogin = document.querySelector('.username');
htmlElements.password = document.querySelector(".password");
htmlElements.btnLogin = document.querySelector(".btn-login");
htmlElements.outLogin = document.querySelector(".out-home");
htmlElements.btnCheckList = document.querySelector(".btn-meeting-list");
htmlElements.checkList = document.querySelector(".check-meeting-list");
htmlElements.loginForm = document.querySelector(".login-form");
htmlElements.mainPage = document.querySelector(".main-page");
htmlElements.modalWindow = document.querySelector(".modalWindow");
htmlElements.html = document.querySelector("html");

 htmlElements.btnLogin.addEventListener("click", (elem) => {
   elem.preventDefault();
  getUsers();
 });
 htmlElements.outLogin.addEventListener("click", (elem) => {
  elem.preventDefault();
  localStorage.removeItem("logIn");
});
htmlElements.btnCheckList.addEventListener("click", (elem) => {
  elem.preventDefault();
  fetch('https://my-first-backend-experience.herokuapp.com/dataTimeMeeting')
  .then(response => response.json())
  .then(json => { 
    let meetingList = JSON.stringify(json);
    let arr = meetingList.split('\",\"');
    
  for (let i = 0; i < arr.length; i++) {
    let span = document.createElement('span');
    htmlElements.checkList.appendChild(span);
    span.innerHTML = ('<br>' + arr[i] );
    ;
}

  });

    elem.stopPropagation();
});


 if(localStorage.getItem("logIn") === "true") {
  htmlElements.loginForm.classList.add("none");
  htmlElements.mainPage.classList.remove("none");
 }

function getUsers() {
  let username = htmlElements.userLogin.value;
  let password = htmlElements.password.value;
  let logIn = false;
  let url = 'https://my-first-backend-experience.herokuapp.com/users';

    for (let i = 1; i < 10; i++) {
    fetch(`${url}/${i}`).then(response => response.json()).then((json) => {
    if (json.name === username && json.password === parseInt(password)) {
      
      logIn = true;
      localStorage.setItem("logIn", JSON.stringify(logIn));
      htmlElements.loginForm.classList.add("none");
      htmlElements.mainPage.classList.remove("none");
    }else{
      htmlElements.modalWindow.classList.remove("none");
      htmlElements.html.addEventListener("click", () => {
      htmlElements.modalWindow.classList.add("none");
      })
    }
  })
}
};

export { getUsers };