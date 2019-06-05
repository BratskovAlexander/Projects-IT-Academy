const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.outputStopwatch = document.querySelector('.container div[data-mode="stopwatch"] .output');

htmlElements.startBtn.addEventListener('click', Stopwatch);
htmlElements.stopBtn.addEventListener('click', stopStopwatch);
htmlElements.resetBtn.addEventListener('click', resetStopwatch);

const myInterval = setInterval(Stopwatch, 10);
const startTime = new Date().getTime();
function stopStartTimedefault() {
    clearInterval(startTime);
};
stopStartTimedefault();

function Stopwatch() {
    
    const difference = (new Date().getTime() - startTime)  / 10;
    let hundredth = parseInt(difference%99); 
    let seconds = parseInt((difference / 100)%60);
    let minutes =  parseInt(difference / 6000);;
    if (hundredth < 10) {
        hundredth = '0' + hundredth;
    }    
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
        
    if (minutes < 10) {
        minutes = '0' + minutes;
        }       
    htmlElements.outputStopwatch.innerText = `${minutes}:${seconds}:${hundredth}`
};

function stopStopwatch() {
    clearInterval(myInterval);
};

function resetStopwatch() {
    htmlElements.outputStopwatch.innerText = '00:00:00';
}




export { Stopwatch };