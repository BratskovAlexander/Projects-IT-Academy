import { CrystalCPU } from "../modules/CrystalCPU.js";
import { CPU } from "../modules/CPU.js";
import { Keyboard } from "../modules/Keyboard.js";
import { Computer } from "../modules/Computer.js";

function Table(widthTable, heightTable, lengthTable, table, onTheTable) {
  this.widthTable = widthTable;
  this.heightTable = heightTable;
  this.lengthTable = lengthTable;
  this.table = table;
  this.onTheTable = onTheTable;
};
Table.prototype.displacemenOftTable = function (right, left, forward, back) {
  this.right = 'movement to the right';
  this.left = 'movement to the left';
  this.forward = 'forward movement';
  this.back = 'backward movement';
};

const compositionCrystal = new CrystalCPU('Crystal is made of silicon(!==silicone)');
const contentCPU = new CPU('metal surface (cover) of the microprocessor', 'the most important and expensive to manufacture part of themicroprocessor', 'all other parts of the processor are attached to it', compositionCrystal);
const contentKeyboard = new Keyboard('black', 'white', 104);
const contentComputer = new Computer('Monitor 27 inches', 'System unit wich have a good iron!', contentCPU, contentKeyboard);

export { Table };