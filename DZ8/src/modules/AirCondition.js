function AirCondition(quantity) {
    this.quantity = quantity;
};

AirCondition.prototype.blow = function(temperatureColdAir, temperatureWarmAir) {
    this.temperatureColdAir = temperatureColdAir;
    this.temperatureWarmAir = temperatureWarmAir;
};

export { AirCondition };