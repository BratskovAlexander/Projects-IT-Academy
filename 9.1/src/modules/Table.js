import { Laptop } from './Loptop.js';

let madeIn = 'Belarus';

function Table(quantity, table) {
    madeIn = 'Russia';
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
    };
    checkIfThereIsASocket("available");
};

madeIn = 'China';

let quantityStudents = 10;

for(let i = 1; i<quantityStudents; i++) {
    console.log(i);
};

if (quantityStudents < 12) {
    console.log(`quantity Students in room is ${quantityStudents = 7}`);
};


switch (quantityStudents) {
  case 4:
    console.log(`Столов не хватит, потому что пришло ${quantityStudents}`);
    break;
  case 7:
    quantityStudents = 'пол группы';
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
    color = 'black';
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