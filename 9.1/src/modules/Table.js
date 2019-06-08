import { Laptop } from './Loptop.js';

let madeIn = 'Belarus';//её область видимости ограничена модулем Table.js

function Table(quantity, table) {
    madeIn = 'Russia';//её область видимости ограничена функцией Table
    this.quantity = quantity;
    this.laptop = new Laptop();
    this.table = table;
    this.color = 'gray';
    this.changeColor = function () {
        this.color = 'black';
      };
    this.checkWhoseTable = function(tableFor) {
        console.log(`The ${tableFor} from Ikea made in ${madeIn} and ${madeIn = 'USA'}!`);
    };
    const checkIfThereIsASocket = function(yesOrNo){
        console.log(`the socket is: ${yesOrNo}`);
    };//её область видимости ограничена функцией Table
    checkIfThereIsASocket("available");
};

madeIn = 'China';//её область видимости ограничена модулем Table.js

let quantityStudents = 10;//её область видимости ограничена модулем Table.js

for(let i = 1;/*её область видимости ограничена циклом for*/ i<quantityStudents; i++) {
    console.log(i);
};

if (quantityStudents < 12) {
    console.log(`quantity Students in room is ${quantityStudents = 7}`/*её область видимости ограничена циклом for*/);
};


switch (quantityStudents) {
  case 4:
    console.log(`Столов не хватит, потому что пришло ${quantityStudents}`);
    break;
  case 7:
    quantityStudents = 'пол группы';/*её область видимости ограничена Конструкцией switch*/
    console.log(`Столов хватит, потому что пришло ${quantityStudents}`);
    break;
  case 10:
   console.log(`Столов перебор, потому что пришло ${quantityStudents}`);
    break;
  default:
    alert( 'Непонятно сколько столов надо' );
};

Table.prototype.changeColor = function(color) {
    this.color = color;
    color = 'black';//её область видимости ограничена функцией changeColor
  };
 
Table.prototype.changeForm = function() {
    this.smallTable = 'table is small!';
    this.bigTable = 'table is big!';
};

Table.prototype.locate = function(yes) {
    if (yes) {
    console.log(`the ${Laptop.name} show movie!`);
    };
    const table = new Table();

    table.checkWhoseTable('table for a student');
};

export { Table };