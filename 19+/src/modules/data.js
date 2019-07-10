function getJSON(url, callBackfunc) {
 let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    callBackfunc(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function Data() {}

Data.prototype.getUsefulContents = function(url) {
  return new Promise(function(resolve, reject) {
    getJSON(url, function(data) {
      resolve(JSON.parse(data));
    });
  });
};

export { Data };
