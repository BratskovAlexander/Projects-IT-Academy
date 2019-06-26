//    Функция для первой части
function changeColor() {
   document.body.className = "";
   let changeColorThroughStyle = document.querySelector(".first-input").value;
   document.body.style.backgroundColor = changeColorThroughStyle;
}

//    Функция для второй части
function changeColor2() {
   document.body.className = "";
   let changeColorThroughList = document.querySelector(".second-part").value;
   document.body.style.backgroundColor = changeColorThroughList;
}

//    Функция для третьей части
function changeColor3() {
   let changeColorThroughClass = document.querySelector(".third-part").value;
   document.body.style.backgroundColor = "";
   document.body.className = changeColorThroughClass;
}

//    Функция для четвертой части don't work
function changeColor4() {
   let changeColorThroughType = document.querySelector(".fourth-part").value;
   //    console.log(changeColorThroughType);
   document.body.style.backgroundColor = "";
   document.body.className = "";
   document.body.style.setProperty("--changeColorThroughType", changeColorThroughType);
}

//    Функция для пятой части
function showMessage(selectElement) {
   document.body.style.backgroundColor = "";
   document.body.className = "";
   document.body.style.backgroundColor = selectElement.value;
}