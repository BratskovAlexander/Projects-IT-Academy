 //    функция деления
 function funcSum(){
    // первый инпут
    let firstNumber = document.getElementById("firstNumber");
    let firstValue = firstNumber.value;
    // второй инпут
    let secondNumber = document.getElementById("secondNumber");
    let secondValue = secondNumber.value;
    // задаем операцию и выводим её
    let Sum = parseInt(firstValue) + parseInt(secondValue);
    alert(Sum);
}
function funcSub(){
    // первый инпут
    let firstNumber = document.getElementById("firstNumber");
    let firstValue = firstNumber.value;
    // второй инпут
    let secondNumber = document.getElementById("secondNumber");
    let secondValue = secondNumber.value;
    // задаем операцию и выводим её
    let Sub = parseInt(firstValue) - parseInt(secondValue);
    alert(Sub);
}
function funcMult(){
    // первый инпут
    let firstNumber = document.getElementById("firstNumber");
    let firstValue = firstNumber.value;
    // второй инпут
    let secondNumber = document.getElementById("secondNumber");
    let secondValue = secondNumber.value;
    // задаем операцию и выводим её
    let Mult = parseInt(firstValue) * parseInt(secondValue);
    alert(Mult);
}
function funcDivis(){
    // первый инпут
    let firstNumber = document.getElementById("firstNumber");
    let firstValue = firstNumber.value;
    // второй инпут
    let secondNumber = document.getElementById("secondNumber");
    let secondValue = secondNumber.value;
    // задаем операцию и выводим её
    let Divis = parseInt(firstValue) / parseInt(secondValue);
    alert(Divis);
}