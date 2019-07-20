import { runSetTimeOut } from "./setTimeOut.js";
import runXhr from "./xmlHttpRequest.js";
import { makeSuncDelay } from "./syncDelay.js";
import { addEventListener } from "./buttonClick.js";

const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";

console.log("sync code start");

makeSuncDelay("First delay", 4, true);
runSetTimeOut("setTimeOut", 80);
runXhr("xhr1", url1);
runXhr("xhr2", url2);
runXhr("xhr3", url3);
addEventListener("button");

console.log("sync code end");
