const htmlElements = {};
htmlElements.startBtn = document.querySelector(
  ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
  ".container .buttons button.stop"
);
htmlElements.resetBtn = document.querySelector(
  ".container .buttons button.reset"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");
htmlElements.tabsClock = document.querySelector(
  '.container .tabs div[data-mode="clock"]'
);
htmlElements.tabsStopwatch = document.querySelector(
  '.container .tabs div[data-mode="stopwatch"]'
);
htmlElements.outputStopwatch = document.querySelector(
  '.container div[data-mode="stopwatch"] .output'
);
htmlElements.outputTimer = document.querySelector(
  '.container div[data-mode="timer"] .output'
);
htmlElements.tabsTimer = document.querySelector(
  '.container .tabs div[data-mode="timer"]'
);

htmlElements.clock.addEventListener("click", function() {
  Tabs(this.dataset.mode);
});
htmlElements.stopwatch.addEventListener("click", function() {
  Tabs(this.dataset.mode);
});
htmlElements.timer.addEventListener("click", function() {
  Tabs(this.dataset.mode);
});

const arrayTabs = [
  htmlElements.clock,
  htmlElements.stopwatch,
  htmlElements.timer
];

function deleteSelected() {
  arrayTabs.forEach(function() {
    htmlElements.clock.classList.remove("selected");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.timer.classList.remove("selected");
  });
}

function setSelected(elem) {
  elem.classList.add("selected");
}

function deleteHidden() {
  htmlElements.tabsClock.classList.add("hidden");
  htmlElements.tabsStopwatch.classList.add("hidden");
  htmlElements.tabsTimer.classList.add("hidden");
}

function Tabs(mode) {
  switch (mode) {
    case "clock":
      deleteSelected();
      deleteHidden();
      setSelected(htmlElements.clock);
      htmlElements.tabsClock.classList.remove("hidden");
      break;
    case "stopwatch":
      deleteSelected();
      deleteHidden();
      setSelected(htmlElements.stopwatch);
      htmlElements.tabsStopwatch.classList.remove("hidden");
      break;
    case "timer":
      deleteSelected();
      deleteHidden();
      setSelected(htmlElements.timer);
      htmlElements.tabsTimer.classList.remove("hidden");
      break;
  }
}

Tabs.prototype.init = function() {
  Tabs();
};

export { Tabs };
