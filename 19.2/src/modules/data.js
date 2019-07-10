function getJSON(url, callBackfunc) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callBackfunc(this.responseText)
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function Data() {}

Data.prototype.getUsefulContents = function(url, callBackfunc) {
    getJSON(url, function(data) {
        callBackfunc(JSON.parse(data))
    })
}


export { Data }