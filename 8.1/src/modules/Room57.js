import { Projector } from './Projector.js';
import { AirCondition } from './AirCondition.js';
import { Table } from './Table.js';

function Room57(number, width, height, length) {
    this.number = number;
    this.width = width;
    this.height = height;
    this.length = length;
    this.projector = new Projector(1);
    this.airCondition = new AirCondition(1);
    this.table = new Table(9);
};


 

export { Room57 };