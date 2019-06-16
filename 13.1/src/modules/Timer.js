import { StopwatchTimer } from "./StopwatchTimer.js";

function Timer() {
  StopwatchTimer.call(this, "timer", 5);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

export { Timer };
