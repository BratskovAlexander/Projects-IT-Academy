function AirCondition(quantity) {
    this.quantity = quantity;
    this.color = 'white';
    this.changeColor = function () {
        this.color = 'gray';
      };
    
    const checkTemperatureAir = function(degrees){
        console.log(`temperature air in room: ${degrees} degrees`);
    };
    checkTemperatureAir(20);
    this.checkNamecondition = function(name) {
        console.log(`AirCondition ${name} made in China!`);
    };
};

AirCondition.prototype.changeColor = function(color) {
    this.color = color;
    color = 'black';
  };
AirCondition.prototype.blow = function(temperatureColdAir, temperatureWarmAir) {
    this.temperatureColdAir = temperatureColdAir;
    this.temperatureWarmAir = temperatureWarmAir;

    const nameAirCondition = new AirCondition();
    nameAirCondition.checkNamecondition('philips');
};

export { AirCondition };