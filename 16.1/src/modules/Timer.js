import { StopwatchTimer } from "./StopwatchTimer.js";

function Timer() {
  StopwatchTimer.bind(this, "timer", 300)();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.setStopWatchTimer = function (difference, lastDifferenceInTime) {
  return lastDifferenceInTime - Math.round(difference / 1000);

}

Timer.prototype.showInfo = function () {
  console.log(this);
};

export { Timer };
