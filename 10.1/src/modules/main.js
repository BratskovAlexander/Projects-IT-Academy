import { Tabs } from '../modules/Tabs.js';
import { Clock } from '../modules/Clock.js';
import { Stopwatch } from '../modules/Stopwatch.js';
import { Timer } from '../modules/Timer.js';

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