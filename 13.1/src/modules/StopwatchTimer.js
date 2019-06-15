import { ClassHelper } from "./ClassHelper.js";

function StopwatchTimer(mode, initSeconds) {
  let startTime;
  let myInterval;
  let differenceInTime = 0;
  let lastDifferenceInTime = initSeconds;

  this.htmlElements = {
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
    ClassHelper.removeClass("disabled", this.htmlElements.btn);
    ClassHelper.addClass("disabled", [this.htmlElements.startBtn]);
    startTime = new Date().getTime();
    myInterval = setInterval(apdateOutput, 1000);
  }

  function stopStopwatch() {
    ClassHelper.removeClass("disabled", this.htmlElements.btn);
    ClassHelper.addClass("disabled", [this.htmlElements.stopBtn]);
    clearInterval(myInterval);
    lastDifferenceInTime = differenceInTime;
  }

  function resetStopwatch() {
    ClassHelper.removeClass("disabled", this.htmlElements.btn);
    ClassHelper.addClass("disabled", [this.htmlElements.resetBtn]);
    lastDifferenceInTime = initSeconds;
    startTime = new Date().getTime();
    clearInterval(myInterval);
    apdateOutput();
  }

  function apdateOutput() {
    const difference = new Date().getTime() - startTime;
    switch (mode) {
      case "stopwatch":
        differenceInTime = Math.round(difference / 1000) + lastDifferenceInTime;
        break;
      case "timer":
        differenceInTime = lastDifferenceInTime - Math.round(difference / 1000);
        if (differenceInTime <= 0) {
          stopStopwatch();
        }
        break;
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
    this.htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
  }

  this.htmlElements.startBtn.addEventListener("click", onButtonClickToStart);
  this.htmlElements.stopBtn.addEventListener("click", stopStopwatch);
  this.htmlElements.resetBtn.addEventListener("click", resetStopwatch);
}

export { StopwatchTimer };
