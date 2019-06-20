import { StopwatchTimer } from "./StopwatchTimer.js";

class Timer {
  constructor() {
    showInfo();
    {
      console.log(this);
    }
  }
}

class Timer extends StopwatchTimer {
  constructor() {
    StopwatchTimer.call(this, "timer", 300);
  }
}

export { Timer };
