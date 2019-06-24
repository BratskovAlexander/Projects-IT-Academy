import { StopwatchTimer } from "./StopwatchTimer.js";

class Stopwatch extends StopwatchTimer {
  constructor() {
    super("stopwatch", 0)
  }

  showInfo() {
    console.log(this);
  }
}

export { Stopwatch };
