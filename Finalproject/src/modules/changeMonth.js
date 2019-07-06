import { Calendar } from "./calender.js";

function ChangeMonth() {
    const htmlElements = {
    btnPrevious: document.querySelector("thead tr th"),
    btnNext: document.querySelector("thead tr th:last-child")
  };
  
  htmlElements.btnPrevious.addEventListener("click", function() {
    let element = document.getElementById("body-table");
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  
    Calendar(
      "table",
      document.querySelector("p").dataset.year,
      parseInt(document.querySelector("p:nth-child(2)").dataset.month) - 1
    );
  });
  htmlElements.btnNext.addEventListener("click", function() {
    let element = document.getElementById("body-table");
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
    
    Calendar(
      "table",
      document.querySelector("p").dataset.year,
      parseInt(document.querySelector("p:nth-child(2)").dataset.month) + 1
    );
  });

}

  export { ChangeMonth }