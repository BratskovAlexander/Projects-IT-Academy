import { StopwatchTimer } from "./StopwatchTimer.js";

class Stopwatch {
  constructor() {
    StopwatchTimer.call(this, "stopwatch", 0);
  }
  showInfo() {
    console.log(this);
  }
}

//class Stopwatch extends StopwatchTimer {}

export { Stopwatch };
