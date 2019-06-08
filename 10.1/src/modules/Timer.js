const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container div[data-mode="timer"] button.start');
htmlElements.stopBtn = document.querySelector('.container div[data-mode="timer"] button.stop');
htmlElements.resetBtn = document.querySelector('.container div[data-mode="timer"] button.reset');
htmlElements.outputTimer = document.querySelector('.container div[data-mode="timer"] .output');


htmlElements.startBtn.addEventListener('click', onButtonClick);
htmlElements.stopBtn.addEventListener('click', stopTimer);
htmlElements.resetBtn.addEventListener('click', resetTimer);

let startTime; 
let myInterval;


function onButtonClick() {
   startTime = new Date().getTime();
   myInterval = setInterval(apdateOutputTimer, 1000);
   htmlElements.startBtn.setAttribute('disabled', 'disabled');
};

let minutesDefault = 4;
let secondsDefault = 60;


function apdateOutputTimer() {
    
    const difference = (new Date().getTime() - startTime) / 1000;
    let seconds = secondsDefault - parseInt(difference%60); 
    let minutes = minutesDefault - parseInt((difference / 60)%60);
    let hours = '00';

    if (seconds < 10) {
        seconds = `0${seconds}`;
    };  
    if (parseInt(difference%60) === 0) {
        seconds = `${parseInt(difference%60)}0`;
        minutes = minutes + 1;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }; 
    if (difference > 300) {
        minutes = `${parseInt(difference%60)}0`;
        stopTimer();
    }
     
    htmlElements.outputTimer.innerText = `${hours}:${minutes}:${seconds}`;
};



function Timer() {};

Timer.prototype.init = function() {
    Timer();
};

function stopTimer() {
    clearInterval(myInterval);
    htmlElements.startBtn.removeAttribute('disabled');
};

function resetTimer() {
    stopTimer();
    htmlElements.outputTimer.innerText = '00:05:00';
}



export { Timer };