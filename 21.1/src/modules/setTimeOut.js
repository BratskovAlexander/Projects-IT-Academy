import log from "./logger.js";

function runSetTimeOut(name, milliseonds) {
  const before = new Date().getTime();
  setTimeout(() => {
    const after = new Date().getTime();
    log(name, before, after, `time setTimeout:${milliseonds}`);
  }, milliseonds);
}

export { runSetTimeOut };
