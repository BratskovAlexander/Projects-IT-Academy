import { StopwatchTimer } from "./StopwatchTimer.js";

class Timer {
  constructor() {
    StopwatchTimer.call(this, "timer", 300);
  }
  showInfo() {
    console.log(this);
  }
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

export { Timer };
