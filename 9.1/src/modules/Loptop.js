import { MonitorLaptop } from './MonitorLaptop.js';

function Laptop() {
    this.name = 'Acer';
    this.monitor = new MonitorLaptop();
    const checSoundLevel = function(levelSound){
      console.log(`Level sound Laptop: ${levelSound}`);
    };//её область видимости ограничена функцией Laptop
    checSoundLevel('50%');
    this.checkQuantityButton = function(quantity) {
    console.log(`quantity button are ${quantity}`);
    };

    this.changeName = function () {
      this.name = 'Asus';
    };

  };
  Laptop.prototype.changeName = function(name) {
    this.name = name;
    name = 'HP';//её область видимости ограничена функцией changeName
  };
  
  Laptop.prototype.open = function(yes) {
    if (yes) {
        console.log(`the laptop ${this.name} is opened,`);
    };
    const nameLaptop = new Laptop();//её область видимости ограничена функцией open
    nameLaptop.checkQuantityButton(96);
  };
  
  export { Laptop };