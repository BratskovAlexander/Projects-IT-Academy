import { Projector } from './Projector.js';
import { AirCondition } from './AirCondition.js';
import { Table } from './Table.js';
import { Board } from './Board.js';

function Room57(number, width, height, length) {
    this.number = number;
    this.width = width;
    this.height = height;
    this.length = length;
    this.room = 'the place for study';
    this.changeStatusRoom = function () {
      this.room = 'the room for admins';
    };
    this.projector = new Projector(1);
    this.airCondition = new AirCondition(1);
    this.table = new Table(9, 'write table');
    this.board = new Board(135, 85)
    const student = function(name){
        console.log(`Name student: ${name}`);
    };
    student('Sasha');

    const frontSide = new Board('2 metr', '1,3 metr');
    frontSide.changeSize()
};

Projector.prototype.changeStatusRoom = function(room) {
  this.room = room;
  room = 'the room for rest';
};
Room57.prototype.checkThelight = function() {
  this.lightOn = 'the light is on!';
  this.lightOff = 'the light is off!';
};




 

export { Room57 };