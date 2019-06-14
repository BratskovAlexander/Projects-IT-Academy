let array = [];

function objectCopy(object) {
  if (array.indexOf(object) > -1) {
    return "This object is circular reference";
  }

  array.push(object);

  const clon = {};

  if (
    object === null ||
    typeof object === undefined ||
    typeof object !== "object"
  ) {
    return object;
  }

  for (let key in object) {
    if (typeof (object[key] === "object")) {
      clon[key] = objectCopy(object[key]);
    } else {
      clon[key] = object[key];
    }
  }
  return clon;
}

const myObject = {
  name: "Alex",
  age: 26,
  myParameters: {
    myGrowth: 176,
    myWeight: {
      now: 79,
      average: 77
    },
    fatBurningProcess() {
      console.log(`at peak form my weight: ${this.average}`);
    }
  },
  showAge() {
    console.log(`my age ${this.age}`);
  }
};

const myObject2 = objectCopy(myObject);

console.log(myObject2);
console.log(array);
