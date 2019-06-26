function CrystalCPU(compositionCrystal) {
  this.compositionCrystal = compositionCrystal;
};
 
 
CrystalCPU.prototype.work = function () {
  this.stateOn = 'it is working';
  this.stateOff = "it isn't working";
};

export { CrystalCPU };