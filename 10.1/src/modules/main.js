import { Tabs } from './Tabs.js';
import { Clock } from './Clock.js';
import { Stopwatch } from './Stopwatch.js';
import { Timer } from './Timer.js';

const tabs = new Tabs();
const clock = new Clock();
const stopwatch = new Stopwatch();
const timer = new Timer();

function init() {
  clock.init();
  tabs.init();
  stopwatch.init();
  timer.init();
}

init();