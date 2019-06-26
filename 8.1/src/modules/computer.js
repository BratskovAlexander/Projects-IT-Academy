import { CrystalCPU } from "../modules/CrystalCPU.js";
import { CPU } from "../modules/CPU.js";
import { Keyboard } from "../modules/keyboard.js";

function Computer(monitor, systemUnit, CPU) {
  this.monitor = monitor;
  this.systemUnit = systemUnit;
  this.CPU = CPU;
};

Computer.prototype.dataInput = function (Keyboard, scanner, webcam, mouse, touchScreen) {
  this.Keyboard = Keyboard;
  this.scanner = scanner;
  this.webcam = webcam;
  this.mouse = mouse;
  this.touchScreen = touchScreen;
};
Computer.prototype.informationOutput = function (monitor, printer, plotter, speakersAndHeadphones) {
  this.monitor = monitor;
  this.printer = 'This device is for outputting digital information to paper';
  this.plotter = 'device for displaying data in graphical form on paper, plastic, photosensitive material or other media by drawing';
  this.speakersAndHeadphones = 'digital audio output devices';
};

const compositionCrystal = new CrystalCPU('Crystal is made of silicon(!==silicone)');
const contentCPU = new CPU('metal surface (cover) of the microprocessor', 'the most important and expensive to manufacture part of themicroprocessor', 'all other parts of the processor are attached to it', compositionCrystal);
const contentKeyboard = new Keyboard('black', 'white', 104);

export { Computer };