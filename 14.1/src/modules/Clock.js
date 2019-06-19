const htmlElements = {};
htmlElements.tabsClock = document.querySelector(
  '.container .tabs div[data-mode="clock"]'
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.output = document.querySelector(".container .output");

class Clock {
  constructor() {
    this.apdateClockOnTick;
    setInterval(this.apdateClockOnTick, 1000);
  }
  addClockDefault() {
    htmlElements.tabsClock.classList.remove("hidden");
  }
  apdateClockOnTick() {
    const newTime = new Date();
    const timeToString = newTime.toTimeString();
    const timeOfArray = timeToString.split(" ")[0];
    htmlElements.output.innerText = timeOfArray;
  }
}

const addClock = new Clock();
addClock.addClockDefault();
addClock.apdateClockOnTick();

export { Clock };
