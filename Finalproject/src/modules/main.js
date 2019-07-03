// let nowDate = new Date(); //текущее время и данные даты
// let today = nowDate.getDate();  //текущая дата
// let currentMonth = nowDate.getMonth(); //цифра текущего месяца
// let currentYear = nowDate.getFullYear(); //текущий год
// let firstDay = new Date(currentYear, currentMonth, 1);//первый день
// let temp = new Date(currentYear, currentMonth + 1, 0); //даные последнего дня месяца
// let lastDay = temp.getDate(); //последняя дата месяца
// let tr = document.createElement('tr');
// let td = document.createElement('td');

// function createTable() {
//     let t = firstDay.getDate() - 1; //Чтобы певый день был начинался правильно, а не со следующего
//     let a = 0;

//     while (firstDay.getMonth() == currentMonth) {
//         let tr = document.createElement('tr');
//         let i = 0;

//         while (i < 7) {
//             let td = document.createElement('td');
//             if (a == 0) {
//                 if (i < t) {
//                     td.innerHTML = '';
//                 } else {
//                     td.innerHTML = firstDay.getDate();
//                     firstDay.setDate(firstDay.getDate() + 1);

//                 }
//             } else {
//                 td.innerHTML = firstDay.getDate();
//                 firstDay.setDate(firstDay.getDate() + 1);

//             }

//             tr.appendChild(td);
//             i++;
//         }
//         if (firstDay.getDate() == lastDay) {
//             firstDay.setDate(firstDay.getDate() + 1);
//             return;
//         }
//         document.getElementById('table').appendChild(tr);
//         a++;
//     }
// }
// createTable();

function Calendar2(id, year, month) {
    let lastDay = new Date(year, month + 1, 0).getDate(); //последний день месяца
    let lastDayInfo = new Date(year, month, lastDay);
    // let DNlast = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), lastDay).getDay();
    let firstDay = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), 1).getDay(); //первый день месяца
    let calendar = '<tr>';
    let arrayMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    console.log(firstDay);

    if (firstDay != 0) {
        for (var i = 1; i < firstDay; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= lastDay; i++) {
        if (i == new Date().getDate() && lastDayInfo.getFullYear() == new Date().getFullYear() && lastDayInfo.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = 0; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = arrayMonth[lastDayInfo.getMonth()] + ' ' + lastDayInfo.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = lastDayInfo.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = lastDayInfo.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
}
