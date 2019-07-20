import log from "./logger.js";

function makeSuncDelay(name, seconds) {
  const before = new Date().getTime();

  for (let i = 0; i < seconds; i++) {
    for (let j = 0; j < 800000000; j++) {
      let a = 1;
    }
  }

  const after = new Date().getTime();
  log(name, before, after);
}

export { makeSuncDelay };
