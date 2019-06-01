import { MonitorLaptop } from './monitor.js';

function Laptop() {
    this.name = 'Acer';
    this.monitor = new MonitorLaptop();
  };
  
  Laptop.prototype.open = function(yes) {
    if (yes) {
        console.log(`the laptop ${this.name} is opened,`);
    };
  };
  
  export { Laptop };