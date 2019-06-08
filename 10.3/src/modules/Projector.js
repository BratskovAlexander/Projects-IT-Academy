function Projector(quantity) {
    this.quantity = quantity;
    this.color = 'white';
    const checkNameProjector = function(name){
      console.log(`Model projector: ${name}`);
  };//её область видимости ограничена функцией Projector, для всего модуля это локальная переменная(константа)
  checkNameProjector('LG');
  this.checkStateProjector = function(sleep) {
    console.log(`projector is ${sleep} `);
};
this.changeColor = function () {
    this.color = 'gray';
  };
};

Projector.prototype.changeColor = function(color) {
    this.color = color;
    color = 'black';//её область видимости ограничена функцией changeColor
  };
Projector.prototype.show = function(included, switchedOff) {
    this.included = included;
    this.switchedOff = switchedOff;

    const stateProjector = new Projector();//её область видимости ограничена функцией show
    stateProjector.checkStateProjector(' not sleeping');
};

export { Projector };