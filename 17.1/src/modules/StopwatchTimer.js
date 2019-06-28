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
    myTimeout = setTimeout(apdateOutput, 1000);
  }

  function stopStopwatch() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.stopBtn]);
    clearTimeout(myTimeout);
    lastDifferenceInTime = differenceInTime;
  }

  function resetStopwatch() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.resetBtn]);
    lastDifferenceInTime = initSeconds;
    startTime = new Date().getTime();
    clearTimeout(myTimeout);
  }

  function apdateOutput() {
    const difference = new Date().getTime() - startTime;
    differenceInTime = self.setStopWatchTimer(difference, lastDifferenceInTime);
    if (differenceInTime <= 0) {
      clearTimeout(myTimeout);
      ClassHelper.addClass("disabled", [htmlElements.stopBtn]);
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
    setTimeout(apdateOutput, 1000);
  }

  htmlElements.startBtn.addEventListener("click", onButtonClickToStart);
  htmlElements.stopBtn.addEventListener("click", stopStopwatch);
  htmlElements.resetBtn.addEventListener("click", resetStopwatch);
}

export { StopwatchTimer };
