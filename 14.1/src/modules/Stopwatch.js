import { StopwatchTimer } from "./StopwatchTimer.js";

function Stopwatch() {
  StopwatchTimer.call(this, "stopwatch", 0);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function() {
  console.log(this);
};

export { Stopwatch };
