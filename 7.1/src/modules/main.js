setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.start');
htmlElements.resetBtn = document.querySelector('.container .buttons button.start');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

function onIntervalNextTick() {
    const newTime = new Date();
    const timeToString = newTime.toTimeString();
    const timeOfArray = timeToString.split(" ")[0];
    htmlElements.output.innerText = timeOfArray;
};
onIntervalNextTick();

htmlElements.clock.addEventListener("click", setSelected);
htmlElements.stopwatch.addEventListener("click", setSelected);
htmlElements.timer.addEventListener("click", setSelected);


function setSelected() {
    htmlElements.clock.classList.remove("selected");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.timer.classList.remove("selected");
    this.classList.add("selected");
};
