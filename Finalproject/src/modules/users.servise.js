const htmlElements = {};

htmlElements.userLogin = document.querySelector('.username');
htmlElements.password = document.querySelector(".password");
htmlElements.btnLogin = document.querySelector(".btn-login");
htmlElements.loginForm = document.querySelector(".login-form");
htmlElements.mainPage = document.querySelector(".main-page");
htmlElements.modalWindow = document.querySelector(".modalWindow");
htmlElements.html = document.querySelector("html");

 htmlElements.btnLogin.addEventListener("click", (elem) => {
   elem.preventDefault();
  getUsers();
 });

function getUsers() {
  let username = htmlElements.userLogin.value;
  let password = htmlElements.password.value;

  let url = 'https://my-json-server.typicode.com/BratskovAlexander/JSON/users';

    for (let i = 1; i < 10; i++) {
    fetch(`${url}/${i}`).then(response => response.json()).then((json) => {

    if (json.name === username && json.password === parseInt(password)) {
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