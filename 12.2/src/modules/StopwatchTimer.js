import { ClassHelper } from "./ClassHelper.js";

function StopwatchTimer(initMode, initSeconds) {
  let startTime;
  let myInterval;
  let differenceInTime = 0;
  let lastDifferenceInTime = initSeconds;
  let mode = initMode;

  const htmlElements = {};

  htmlElements.btn = document.querySelectorAll(
    `.container div[data-mode=${mode}] .buttons button`
  );
  htmlElements.startBtn = document.querySelector(
    `.container div[data-mode=${mode}] .buttons button.start`
  );
  htmlElements.stopBtn = document.querySelector(
    `.container div[data-mode=${mode}] .buttons button.stop`
  );
  htmlElements.resetBtn = document.querySelector(
    `.container div[data-mode=${mode}] .buttons button.reset`
  );
  htmlElements.output = document.querySelector(
    `.container div[data-mode=${mode}] .output`
  );

  function onButtonClickToStart() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.startBtn]);
    startTime = new Date().getTime();
    myInterval = setInterval(apdateOutput, 1000);
  }

  function stopStopwatch() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.stopBtn]);
    clearInterval(myInterval);
    lastDifferenceInTime = differenceInTime;
  }

  function resetStopwatch() {
    ClassHelper.removeClass("disabled", htmlElements.btn);
    ClassHelper.addClass("disabled", [htmlElements.resetBtn]);
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
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
  }

  htmlElements.startBtn.addEventListener("click", onButtonClickToStart);
  htmlElements.stopBtn.addEventListener("click", stopStopwatch);
  htmlElements.resetBtn.addEventListener("click", resetStopwatch);
}

export { StopwatchTimer };
