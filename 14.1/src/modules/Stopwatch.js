//import { StopwatchTimer } from "./StopwatchTimer.js";

class Stopwatch {
  constructor() {}
  showInfo() {
    console.log(this);
  }
}

class StopwatchTimer extends Stopwatch {
  constructor() {}
  super() {}
}

const stopwatch = new Stopwatch("stopwatch", 0);

export { Stopwatch };
