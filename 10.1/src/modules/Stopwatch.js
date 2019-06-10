const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.outputStopwatch = document.querySelector('.container div[data-mode="stopwatch"] .output');

function Stopwatch() { };

Stopwatch.prototype.init = function () {
    htmlElements.startBtn.addEventListener('click', onButtonClickToStart);
    htmlElements.stopBtn.addEventListener('click', stopStopwatch);
    htmlElements.resetBtn.addEventListener('click', resetStopwatch);
};

let startTime;
let myInterval;
let differenceInTime = 0;
let lastDifferenceInTime = 0;

function onButtonClickToStart() {
    startTime = new Date().getTime();
    myInterval = setInterval(apdateOutput, 10);
    htmlElements.startBtn.setAttribute('disabled', 'disabled');
};

function stopStopwatch() {
    htmlElements.startBtn.removeAttribute('disabled');
    clearInterval(myInterval);
    lastDifferenceInTime = differenceInTime;
};

function resetStopwatch() {
    lastDifferenceInTime = 0;
    startTime = new Date().getTime();
    clearInterval(myInterval);
    htmlElements.outputStopwatch.innerText = '00:00:00';
};

function apdateOutput() {
    const difference = new Date().getTime() - startTime;
    differenceInTime = difference / 10 + lastDifferenceInTime;
    let hundredth = parseInt(differenceInTime % 99);
    let seconds = parseInt((differenceInTime / 100) % 60);
    let minutes = parseInt(differenceInTime / 6000);;
    if (hundredth < 10) {
        hundredth = `0${hundredth}`;
    };
    if (seconds < 10) {
        seconds = `0${seconds}`;
    };

    if (minutes < 10) {
        minutes = `0${minutes}`;
    };
    htmlElements.outputStopwatch.innerText = `${minutes}:${seconds}:${hundredth}`;
};

export { Stopwatch };