import { CrystalCPU } from "../modules/CrystalCPU.js";
import { CPU } from "../modules/CPU.js";
import { Keyboard } from "../modules/keyboard.js";
import { Computer } from "../modules/computer.js";
import { Table } from "../modules/table.js";
import { TheCabinet } from "../modules/thecabinet.js";
import { TheCabinetNumber57 } from "../modules/TheCabinetNumber57.js";

const compositionCrystal = new CrystalCPU('Crystal is made of silicon(!==silicone)');
const contentCPU = new CPU('metal surface (cover) of the microprocessor', 'the most important and expensive to manufacture part of themicroprocessor', 'all other parts of the processor are attached to it', compositionCrystal);
const contentKeyboard = new Keyboard('black', 'white', 104);
const contentComputer = new Computer('Monitor 27 inches', 'System unit wich have a good iron!', 'contentCPU', contentKeyboard);

contentComputer.dataInput(contentKeyboard, 'A device for translating graphic information into digital', 'small digital video or cameracapable of real-time recording of video images intended for further transmission over a computer network', 'When it moves along the rug', 'themouse pointer moves on the screen', 'with which you can point to objects and or select them', 'input device', 'which is a screen that respondsto it');

const contentTable = new Table("160 centimeters", "120 centimeters", "80 centimeters", "Write table", contentComputer);
const contentTheCabinet = new TheCabinet("just the floor", "just the a wall", "just ceiling", "The floor is wooden", contentTable);
const contentTheCabinetNumber57 = new TheCabinetNumber57('CabinetNumber57', '3 meters', '12 meters', '12 meters', contentTheCabinet);

console.log(contentTheCabinetNumber57);
