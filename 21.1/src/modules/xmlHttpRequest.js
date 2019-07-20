import log from "./logger.js";

export default function runXhr(name, url) {
  const before = new Date().getTime();
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function() {
    const after = new Date().getTime();
    log(name, before, after);
  };
  xhr.send();
}
