import { CrystalCPU } from "../modules/CrystalCPU.js";

function CPU(cap, crystal, specialTextoliteSubstrate, compositionCrystalCPU) {
  this.cap = cap;
  this.crystal = crystal;
  this.specialTextoliteSubstrate = specialTextoliteSubstrate;
  this.compositionCrystalCPU = compositionCrystalCPU;
};

CPU.prototype.volume = function (volumeCPU) {
  this.volumeCPU = 1;
};

const compositionCrystal = new CrystalCPU();

export { CPU };