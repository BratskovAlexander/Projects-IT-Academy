import { Laptop } from './loptop.js';

function Table(quantity, table) {
    this.quantity = quantity;
    this.laptop = new Laptop();
    this.table = table;
    this.checkWhoseTable = function(tableFor) {
        console.log(`The ${tableFor} from Ikea!`);
    };
    const checkIfThereIsASocket = function(yesOrNo){
        console.log(`the socket is: ${yesOrNo}`);
    };
    checkIfThereIsASocket("available")
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