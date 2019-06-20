import { Tabs } from "./Tabs.js";
import { Clock } from "./Clock.js";
import { Timer } from "./Timer.js";
import { Stopwatch } from "./Stopwatch.js";

const tabs = new Tabs();
const clock = new Clock();
const timer = new Timer();
const stopwatch = new Stopwatch();

timer.showInfo();
stopwatch.showInfo();
