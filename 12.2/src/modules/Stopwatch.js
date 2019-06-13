import { ClassHelper } from "./ClassHelper.js";

function StopwatchTimer() {
  htmlElements = {};
  htmlElements.btn = document.querySelector(
    `.container div[data-mode=${mode}] .buttons`
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

  let startTime;
  let myInterval;
  let differenceInTime = 0;
  let lastDifferenceInTime = 0;

  function apdateOutput() {
    const difference = new Date().getTime() - startTime;
    switch (mode) {
      case "stopStopwatch":
        differenceInTime = Math.fround(
          difference / 1000 + lastDifferenceInTime
        );
        break;
      case "timer":
        differenceInTime =
          lastDifferenceInTime - Math.fround(difference / 1000);
    }

    let seconds = parseInt(differenceInTime / 60);
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
    htmlElements.outputStopwatch.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

function Stopwatch() {}

Stopwatch.prototype.init = function() {
  htmlElements.startBtn.addEventListener("click", onButtonClickToStart);
  htmlElements.stopBtn.addEventListener("click", stopStopwatch);
  htmlElements.resetBtn.addEventListener("click", resetStopwatch);
};

function onButtonClickToStart() {
  ClassHelper.removeClass("disabled", htmlElements.btn);
  ClassHelper.addClass("disable", htmlElements.startBtn);
  startTime = new Date().getTime();
  myInterval = setInterval(apdateOutput, 10);
}

function stopStopwatch() {
  ClassHelper.removeClass("disabled", htmlElements.btn);
  ClassHelper.addClass("disable", htmlElements.stopBtn);
  clearInterval(myInterval);
  lastDifferenceInTime = differenceInTime;
}

function resetStopwatch() {
  ClassHelper.removeClass("disabled", htmlElements.btn);
  ClassHelper.addClass("disable", htmlElements.resetBtn);
  lastDifferenceInTime = 0;
  startTime = new Date().getTime();
  clearInterval(myInterval);
  htmlElements.outputStopwatch.innerText = "00:00:00";
}

export { StopwatchTimer };
