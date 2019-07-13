function getJSON(url, callBackfunc) {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    callBackfunc(JSON.parse(this.responseText));
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function Data() {}

Data.prototype.getUsefulContents = function(url) {
  return new Promise(function(resolve) {
    getJSON(url, function(data) {
      resolve(data);
    });
  });
};

export { Data };
