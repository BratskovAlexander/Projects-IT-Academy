function changeLink() {
  document.querySelector("a.myLink").addEventListener("click", elem => {
    elem.preventDefault();
    window.location.href = "http://google.com";
  });
}
changeLink();