import { Tabs } from "./Tabs.js";
import { Clock } from "./Clock.js";
import { StopwatchTimer } from "./StopwatchTimer.js";

const tabs = new Tabs();
const clock = new Clock();
const stopwatch = new StopwatchTimer("stopwatch", 0);
const timer = new StopwatchTimer("timer", 300);

if (stopwatch === undefined || timer === undefined) {
} else {
}

function init() {
  clock.init();
  tabs.init();
}

init();
