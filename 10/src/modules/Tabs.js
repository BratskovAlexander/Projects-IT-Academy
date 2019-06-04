

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');


htmlElements.clock.addEventListener("click", function() {switchToMode(this.dataset.mode)});
htmlElements.stopwatch.addEventListener("click", function() {switchToMode(this.dataset.mode)});
htmlElements.timer.addEventListener("click", function() {switchToMode(this.dataset.mode)});


const arrayTabs = [htmlElements.clock, htmlElements.stopwatch, htmlElements.timer];

function deleteSelected(){
arrayTabs.forEach(function() {
    htmlElements.clock.classList.remove("hidden ");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.timer.classList.remove("selected");
});
};


function setSelected(elem) {
    elem.classList.add("selected"); 
};

// function deleteHidden(){
//     arrayTabs.forEach(function() {
//         const clockMode  = htmlElements.clock.dataset.mode;
//         clockMode.className.remove("hidden");
//         htmlElements.stopwatch.dataset.mode.classList.remove("hidden");
//         htmlElements.timer.dataset.mode.classList.remove("hidden");
//     });
//     };

function switchToMode(mode) {
    switch(mode) {
    case "clock":
        deleteSelected();
        setSelected(htmlElements.clock);
        // htmlElements.clock.dataset.mode.classList.remove("hidden");
        break;
    case "stopwatch":
        deleteSelected();
        setSelected(htmlElements.stopwatch);
        // deleteHidden();
        break;
    case "timer":
        deleteSelected();
        setSelected(htmlElements.timer);
        // deleteHidden();
        break;
    };
};

function Tabs() {};

export { Tabs };