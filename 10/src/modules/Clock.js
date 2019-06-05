const htmlElements = {};
htmlElements.tabsClock = document.querySelector('.container .tabs div[data-mode="clock"]');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.output = document.querySelector('.container .output');

function addClockDefault() {
    htmlElements.tabsClock.classList.remove("hidden");
};
addClockDefault();

function Clock() {
    const newTime = new Date ();
    const timeToString = newTime.toTimeString();
    const timeOfArray = timeToString.split(" ")[0];
    htmlElements.output.innerText = timeOfArray;
};


export { Clock };