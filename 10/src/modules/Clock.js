setInterval(Clock, 1000);

const htmlElements = {};
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.output = document.querySelector('.container .output');

function Clock() {
    const newTime = new Date ();
    const timeToString = newTime.toTimeString();
    const timeOfArray = timeToString.split(" ")[0];
    htmlElements.output.innerText = timeOfArray;
};


export { Clock };