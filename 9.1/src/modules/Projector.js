function Projector(quantity) {
    this.quantity = quantity;
    this.color = 'white';
    const checkNameProjector = function(name){
      console.log(`Model projector: ${name}`);
  };
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
    color = 'black';
  };
Projector.prototype.show = function(included, switchedOff) {
    this.included = included;
    this.switchedOff = switchedOff;

    const stateProjector = new Projector();
    stateProjector.checkStateProjector(' not sleeping');
};

export { Projector };