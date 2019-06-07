import { Projector } from './Projector.js';
import { AirCondition } from './AirCondition.js';
import { Table } from './Table.js';

function Room57(number, width, height, length) {
    this.number = number;
    this.width = width;
    this.height = height;
    this.length = length;
    this.room = 'the place for study';
    this.projector = new Projector(1);
    this.airCondition = new AirCondition(1);
    this.table = new Table(9, 'write table');
    const student = function(name){
        console.log(`Name student: ${name}`);
    };
    student('Sasha');
    function Board (widthBoard, heightBoard) {
      this.widthBoard = widthBoard;
      this.heightBoard = heightBoard;
      this.changeSize = function() {
        console.log(`Width of board: ${widthBoard}, and height of board: ${heightBoard}`);
      }
    }
    const frontSide = new Board('2 metr', '1,3 metr');
    frontSide.changeSize()
};

Room57.prototype.checkThelight = function() {
  this.lightOn = 'the light is on!';
  this.lightOff = 'the light is off!';
};




 

export { Room57 };