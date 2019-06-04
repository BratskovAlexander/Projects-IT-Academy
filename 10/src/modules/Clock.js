setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.output = document.querySelector('.container .output');

function Clock() {};

function onIntervalNextTick() {
    const newTime = new Date ();
    const timeToString = newTime.toTimeString();
    const timeOfArray = timeToString.split(" ")[0];
    htmlElements.output.innerText = timeOfArray;
};
onIntervalNextTick();

function addClock() {
    const clockMode = htmlElements.clock.dataset.mode;
    clockMode.classList.remove("hidden");
}
addClock();

export { Clock };