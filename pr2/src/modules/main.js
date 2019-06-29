//Задание1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;
array.forEach((param) => {
    result += param;
});
console.log(result); //45


//Задание2
//<script type="module" src="main.js"></script>




// Задание 3
const obj1 = {
    name: 'First Jedi',
};
const obj2 = Object.create(obj1);
obj2.greet = function () {
    console.log(`Hello ${this.name}`);
};
const obj3 = Object.create(obj2);
obj3.name = 'Last Jedi';
obj3.greet();   //Hello Last Jedi
obj2.greet.bind(obj1)();  //Hello First Jedi



//Задание4
function Animal() {
    this.color = 'blue';
    this.run = function run(speed) {
        console.log(`${this.color} animal is running with the speed of ${speed} km/h`);
    }
    this.run();
}

function Rabbit() {
    Animal.call(this);
};

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

function WhiteRabbit() {
    Rabbit.call(this);
    this.color = 'black';
}
WhiteRabbit.prototype = Object.create(Rabbit.prototype);
WhiteRabbit.prototype.constructor = WhiteRabbit;

WhiteRabbit.prototype.showColor = function () {
    console.log(`my color is ${this.color}`);
}
const whiteRabbit = new WhiteRabbit();
whiteRabbit.showColor(); //my color is black


//Задание 5
const interval = 1000;
let myinterval = setInterval(function () {
    console.log(`the interval is ${interval}`);  //the interval is 1000
}, interval);

setTimeout(function () {
    clearInterval(myinterval);
}, interval);