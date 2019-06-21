//import { StopwatchTimer } from "./StopwatchTimer.js";

class Timer {
  constructor() {}
  showInfo() {
    console.log(this);
  }
}

class StopwatchTimer extends Timer {
  constructor() {}
  super() {}
}

const timer = new Timer("timer", 300);

export { Timer };
