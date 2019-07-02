let nowDate = new Date();
let today = nowDate.getDate();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let temp = new Date(currentYear, currentMonth + 1, 0)
let lastDay = temp.getDate();


function createTable() {
    let d = new Date(currentYear, currentMonth, 1);
    let t = d.getDate() - 1;

    if (t < 0) {
        t = 6;
    }
    console.log(t);
    let a = 0;
    while (d.getMonth() == currentMonth) {

        let tr = document.createElement('tr');
        let i = 0;

        while (i < 7) {

            let td = document.createElement('td');
            if (a == 0) {
                if (i < t) {
                    td.innerHTML = '';
                } else {
                    td.innerHTML = d.getDate();
                    d.setDate(d.getDate() + 1);

                }
            } else {

                td.innerHTML = d.getDate();
                d.setDate(d.getDate() + 1);

            }

            tr.appendChild(td);
            i++;
            if (d.getDate() == lastDay) {
                break;
            }
        }

        document.getElementById('table').appendChild(tr);
    }
}
createTable();
