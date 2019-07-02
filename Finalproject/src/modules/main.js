let nowDate = new Date(); //текущее время и данные даты
let today = nowDate.getDate();  //текущая дата
let currentMonth = nowDate.getMonth(); //цифра текущего месяца
let currentYear = nowDate.getFullYear(); //текущий год
let firstDay = new Date(currentYear, currentMonth, 1);//первый день
let temp = new Date(currentYear, currentMonth + 1, 0); //даные последнего дня месяца
let lastDay = temp.getDate(); //последняя дата месяца
let tr = document.createElement('tr');
let td = document.createElement('td');

function createTable() {
    let t = firstDay.getDate() - 1; //Чтобы певый день был начинался правильно, а не со следующего
    let a = 0;

    while (firstDay.getMonth() == currentMonth) {
        let tr = document.createElement('tr');
        let i = 0;

        while (i < 7) {
            let td = document.createElement('td');
            if (a == 0) {
                if (i < t) {
                    td.innerHTML = '';
                } else {
                    td.innerHTML = firstDay.getDate();
                    firstDay.setDate(firstDay.getDate() + 1);
                    if (firstDay.getDate() == lastDay) {
                        td.innerHTML = '';
                        break;
                    }
                }
            } else {
                td.innerHTML = firstDay.getDate();
                firstDay.setDate(firstDay.getDate() + 1);
            }
            tr.appendChild(td);
            i++;
        }
        document.getElementById('table').appendChild(tr);
        a++;
    }
}
createTable();
