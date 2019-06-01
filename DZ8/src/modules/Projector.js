function Projector(quantity) {
    this.quantity = quantity;
};

Projector.prototype.show = function(included, switchedOff) {
    this.included = included;
    this.switchedOff = switchedOff;
};

export { Projector };