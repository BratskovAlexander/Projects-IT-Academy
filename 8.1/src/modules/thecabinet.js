import { CrystalCPU } from "../modules/CrystalCPU.js";
import { CPU } from "../modules/CPU.js";
import { Keyboard } from "../modules/keyboard.js";
import { Computer } from "../modules/computer.js";
import { Table } from "../modules/table.js";

function TheCabinet(floor, wall, ceiling, compositionFloor, onTheFoor) {
  this.floor = floor;
  this.wall = wall;
  this.ceiling = ceiling;
  this.compositionFloor = compositionFloor;
  this.onTheFoor = onTheFoor;
};

TheCabinet.prototype.people = function (sitDown, stand) {
  this.sitDown = 'the student sits and listens to the teacher';
  this.stand = 'the student is waiting for the lesson to start';
};

const compositionCrystal = new CrystalCPU('Crystal is made of silicon(!==silicone)');
const contentCPU = new CPU('metal surface (cover) of the microprocessor', 'the most important and expensive to manufacture part of  themicroprocessor', 'all other parts of the processor are attached to it', compositionCrystal);
const contentKeyboard = new Keyboard('black', 'white', 104);
const contentComputer = new Computer('Monitor 27 inches', 'System unit wich have a good iron!', contentCPU, contentKeyboard);
const contentTable = new Table("160 centimeters", "120 centimeters", "80 centimeters", "Write table", contentComputer);

export { TheCabinet };