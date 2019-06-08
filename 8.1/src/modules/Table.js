import { Laptop } from './Loptop.js';

function Table(quantity, ) {
    this.quantity = quantity;
    this.laptop = new Laptop();
};



Table.prototype.changeForm = function() {
    this.smallTable = 'table is small!';
    this.bigTable = 'table is big!';
};

Table.prototype.locate = function(yes) {
    if (yes) {
    console.log(`the ${Laptop.name} show movie!`);
    };
};

export { Table };