const pForYear = document.createElement("p"); //абзац для года
const pForMonth = document.createElement("p"); //абзац для месяца

const arrayMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December"
]; //Массив для вывода названия месяца

function Calendar(id, year, month) {
  let dayFirst = new Date(year, month, 1);
  let getFirstDay = dayFirst.getDate();
  let getFirstDayIfNotMonday = dayFirst.getDate() - 1;

  let lastDayMonth = new Date(year, month + 1, 0).getDate(); //Последний день меясца
  const lastDayInfo = new Date(year, month, lastDayMonth); // ифно последнего дня месяца
  let firstDayMonth = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), 1).getDay(); //первый день месяца
  let firstDayInfo = new Date(lastDayInfo.getFullYear(), lastDayInfo.getMonth(), 1);

console.log(firstDayMonth);
    
    let countWeek = 0;
 while(dayFirst.getDate() != lastDayMonth) {
    if(firstDayMonth < 0) {
        firstDayMonth = 6;
    }
    let tr = document.createElement('tr');
    let dayWeek = 0;
     while(dayWeek < 7) {
        let td = document.createElement('td');

if (countWeek == 0) {
     if(dayWeek < firstDayMonth){
        td.innerHTML = ('');
     }else{
     td.innerHTML = dayFirst.getDate();
     dayFirst.setDate(dayFirst.getDate() + 1); 
     }
}else{
    td.innerHTML = dayFirst.getDate();
     dayFirst.setDate(dayFirst.getDate() + 1); 
}
 

     if (dayFirst.getDate() == lastDayMonth) {
        tr.appendChild(td);
        document.getElementById("table").appendChild(tr);     
      break;
}
tr.appendChild(td);
     dayWeek++;

     console.log(lastDayMonth);




     
     }
     document.getElementById("table").appendChild(tr);
    countWeek++;
 }









































  //   let lastDayMonth = new Date(year, month + 1, 0).getDate(); //Последний день меясца
  //   const lastDayInfo = new Date(year, month, lastDayMonth); // ифно последнего дня месяца
  //   let firstDayMonth = new Date(
  //     lastDayInfo.getFullYear(),
  //     lastDayInfo.getMonth(),
  //     1
  //   ).getDay(); //первый день месяца
  //   let firstDayInfo = new Date(
  //     lastDayInfo.getFullYear(),
  //     lastDayInfo.getMonth(),
  //     1
  //   );

  //   if (firstDayMonth != 0) {

  //         for (let i = 1; i < firstDayMonth; i++) {
  //             const td = document.createElement("td"); //Создали пустую ячейку
  //           td.innerHTML = ""; //кладем в ячейку число
  //           tr.appendChild(td); //добавляем ячейку в строчку
  //         }
  //     }
  //   for (let i = 0; i < lastDayMonth; i++) {

  //         let getDay = firstDayInfo.toDateString();
  //         let arrGetDay = getDay.split(" ")[0];

  //         if (arrGetDay === "Mon") {
  //             const tr = document.createElement("tr"); //Создали пустую строку
  //             const td = document.createElement("td"); //Создали пустую ячейку
  //             tr.appendChild(td);
  //             document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу

  //           }

  //         const td = document.createElement("td"); //Создали пустую ячейку
  //         td.innerHTML = firstDayInfo.getDate(); //кладем в ячейку число
  //         tr.appendChild(td); //добавляем ячейку в строчку
  //         firstDayInfo.setDate(firstDayInfo.getDate() + 1); //Добавляем следующую дату
  //         console.log(tr);

  //         if (firstDayInfo.getDate() == lastDayMonth) {
  //           document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
  //           //Условие чтобы остановить цикл, если закончиться месяц

  //           break;
  //         }

  //   let a = 0;
  //   while (a < 6) {

  //     // цикл для месяца
  //     let dayOfWeek = 0;
  //     const tr = document.createElement("tr"); //Создали пустую строку
  //     while (dayOfWeek < 7) {

  // if(firstDayMonth < 6) {
  //     for(let i = 1; i < firstDayMonth; i++) {
  //         const td = document.createElement("td"); //Создали пустую ячейку
  //       td.innerHTML = (''); //кладем в ячейку число
  //       tr.appendChild(td); //добавляем ячейку в строчку
  //     }
  // }

  //       //цикл для недели
  //       const td = document.createElement("td"); //Создали пустую ячейку
  //       td.innerHTML = firstDayInfo.getDate(); //кладем в ячейку число
  //       tr.appendChild(td); //добавляем ячейку в строчку
  //       if (firstDayInfo.getDate() == lastDayMonth) {
  //         //Условие чтобы остановить цикл, если закончиться месяц
  //         break;
  //       }
  //       firstDayInfo.setDate(firstDayInfo.getDate() + 1); //Добавляем следующую дату

  //       dayOfWeek++; //добавляем день в неделю
  //     }
  //     if (firstDayInfo.getDate() == lastDayMonth) {
  //         document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
  //         //Условие чтобы остановить цикл, если закончиться месяц
  //         break;
  //       }

  //       if(arrGetDay === 'Sun') {
  //         document.querySelector("#table").appendChild(tr); //Добавляем неделю в таблицу
  //       }

  //     a++;
  //   }

  const yearNow = (document
    .getElementById("header-calender")
    .appendChild(pForYear).innerHTML = `Now Year: ${year}`); //Вывели текущий год

  const monthNow = (document
    .getElementById("header-calender")
    .appendChild(pForMonth).innerHTML = `Now Month: ${arrayMonth[month - 1]}`); //Вывели текущий месяц

  const nowMonthInHeadTable = (document.querySelector(
    "thead tr td[colspan]"
  ).innerHTML = arrayMonth[month - 1]); //Вывели текущий месяц в шапку таблицы
}

export { Calendar };
