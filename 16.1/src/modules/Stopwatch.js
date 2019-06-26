import { StopwatchTimer } from "./StopwatchTimer.js";

function Stopwatch() {
  StopwatchTimer.apply(this, ["stopwatch", 0]);
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.setStopWatchTimer = function (difference, lastDifferenceInTime) {
  return Math.round(difference / 1000) + lastDifferenceInTime;
}

Stopwatch.prototype.showInfo = function () {
  console.log(this);
};

export { Stopwatch };
