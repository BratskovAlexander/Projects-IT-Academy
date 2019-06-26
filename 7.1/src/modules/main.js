let name = prompt("Введите ваше имя");
let surName = prompt("Введите ваше Фамилию");
let patronymic = prompt("Введите ваше Отчество");
let age = prompt("Введите ваш возраст");
let gender = confirm("Ваш пол мужской");

if ((name === null) || (name === "")) {
    name = prompt("Введите ваше имя ещё раз");
}
if ((surName === null) || (surName === "")) {
    surName = prompt("Введите вашу фамилию ещё раз");
}
if ((patronymic === null) || (patronymic === "")) {
    patronymic = prompt("Введите ваше отчество ещё раз");
}
fullName = "Ваше ФИО: " + name + " " + surName + " " + patronymic;



if ((age >= 120) || (age === null) || (isNaN(age)) || age === "") {
    age = prompt("Введите возраст коректнее");
}
if ((age >= 120) || (age === null) || (isNaN(age))) {
    age = prompt("Введите возраст коректнее");
}
if (((gender === true) && (age <= 60)) || ((gender === false) && (age <= 55))) {
    genderPensia = "Вы на пенсии: Нет";
}
else {
    genderPensia = "Вы на пенсии: Да";
}
if (gender === true) {
    gender = "Ваш пол: мужской";
}
else {
    gender = "Ваш пол: женский";
}


ageInDay = "Ваш возраст в днях: " + ((age * 365) + (parseInt(age / 4))) + "\n";
ageThrough = "Через 5  вам будет: " + (parseInt(age) + 5) + "\n";
age = "Ваш возраст в годах: " + age + "\n" + ageInDay + ageThrough;

alert(fullName + "\n" + age + gender + "\n" + genderPensia);

