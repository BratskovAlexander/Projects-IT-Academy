import { Tabs } from './modules/Tabs.js';
import { Clock } from './modules/Clock.js';
import { Stopwatch } from './modules/Stopwatch.js';
import { Timer } from './modules/Timer.js';

    
    const clock = new Clock();
    const tabs = new Tabs();
    const stopwatch = new Stopwatch();
    const timer = new Timer();

Clock.prototype.init = function() {
    setInterval(Clock, 1000);
    Clock();
};
Tabs.prototype.init = function() {
    Tabs();
};
Stopwatch.prototype.init = function() {
    Stopwatch();
};
Timer.prototype.init = function() {
    Timer();
};





function init() {
  clock.init();
  tabs.init();
  stopwatch.init();
  timer.init();
}

init();