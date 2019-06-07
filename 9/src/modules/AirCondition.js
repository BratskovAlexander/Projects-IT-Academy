function AirCondition(quantity) {
    this.quantity = quantity;
    
    const checkTemperatureAir = function(degrees){
        console.log(`temperature air in room: ${degrees} degrees`);
    };
    checkTemperatureAir(20);
    this.checkNamecondition = function(name) {
        console.log(`AirCondition ${name} made in China!`);
    };
};


AirCondition.prototype.blow = function(temperatureColdAir, temperatureWarmAir) {
    this.temperatureColdAir = temperatureColdAir;
    this.temperatureWarmAir = temperatureWarmAir;

    const nameAirCondition = new AirCondition();
    nameAirCondition.checkNamecondition('philips');
};

export { AirCondition };