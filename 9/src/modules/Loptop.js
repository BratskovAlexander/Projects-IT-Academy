import { MonitorLaptop } from './monitor.js';

function Laptop() {
    this.name = 'Acer';
    this.monitor = new MonitorLaptop();
    const checSoundLevel = function(levelSound){
      console.log(`Level sound Laptop: ${levelSound}`);
  };
  checSoundLevel('50%');
  this.checkQuantityButton = function(quantity) {
    console.log(`quantity button are ${quantity}`);
};
  };
  
  Laptop.prototype.open = function(yes) {
    if (yes) {
        console.log(`the laptop ${this.name} is opened,`);
    };
    const nameLaptop = new Laptop();
    nameLaptop.checkQuantityButton(96);
  };
  
  export { Laptop };