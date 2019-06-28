import { ClassHelper } from "./ClassHelper.js";

function StopwatchTimer(mode, initSeconds) {
  let startTime;
  let myTimeout;
  let differenceInTime = 0;
  let lastDifferenceInTime = initSeconds;
  const self = this;

  const htmlElements = {
    btn: document.querySelectorAll(
      `.container div[data-mode=${mode}] .buttons button`
    ),
    startBtn: document.querySelector(
      `.container div[data-mode=${mode}] .buttons button.start`
    ),
    stopBtn: document.querySelector(
      `.container div[data-mode=${mode}] .buttons button.stop`
    ),
    resetBtn: document.querySelector(
      `.container div[data-mode=${mode}] .buttons button.reset`
    ),
    output: document.querySelector(`.container div[data-mode=${mode}] .output`)
  };



  function onButtonClickToStart() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.startBtn]);
    startTime = new Date().getTime();
    let tick = () => {
      apdateOutput();
      myTimeout = setTimeout(tick, 1000);
    };
    myTimeout = setTimeout(() => {
      tick();
    }, 1000);
  }

  function stopStopwatch() {
    clearTimeout(myTimeout);
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.stopBtn]);
    lastDifferenceInTime = differenceInTime;
  }

  function resetStopwatch() {
    clearTimeout(myTimeout);
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.resetBtn]);
    lastDifferenceInTime = initSeconds;
    startTime = new Date().getTime();
    apdateOutput();
  }

  function apdateOutput() {
    const difference = new Date().getTime() - startTime;
    differenceInTime = self.setStopWatchTimer(difference, lastDifferenceInTime);
    if (differenceInTime <= 0) {
      htmlElements.output.innerText = '00:00:00';
      ClassHelper.addClass("disabled", [htmlElements.stopBtn]);
      return;
    }
    let seconds = parseInt(differenceInTime % 60);
    let minutes = parseInt((differenceInTime / 60) % 60);
    let hours = parseInt(differenceInTime / 3600);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
  }

  htmlElements.startBtn.addEventListener("click", onButtonClickToStart);
  htmlElements.stopBtn.addEventListener("click", stopStopwatch);
  htmlElements.resetBtn.addEventListener("click", resetStopwatch);
}

export { StopwatchTimer };
