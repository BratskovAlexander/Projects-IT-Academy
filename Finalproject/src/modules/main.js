let nowDate = new Date();

let today = nowDate.getDate();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let temp = new Date(currentYear, currentMonth, 1, 0)
let lastDay = temp.getDate();

console.log(lastDay);



function createTable() {
    let arrayDate = [];
    for (let i = 1; i <= 30; i++) {
        nowDate.setDate(i);
        let td = document.createElement('td');
        td.innerHTML = nowDate.getDate();
        arr.push(td);
    }
    for (let i = 1; i < arrayDate.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            tr.appendChild(arrayDate[j])
        }
        table.appendChild(tr);
    }
}




console.log();