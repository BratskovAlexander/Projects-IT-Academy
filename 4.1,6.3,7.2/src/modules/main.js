function CrystalCPU(compositionCrystal) {
    this.compositionCrystal = compositionCrystal;
};


const compositionCrystal = new CrystalCPU(`Crystal is made of silicon(!==silicone)`);

// the First class through prototype
CrystalCPU.prototype.work = function (stateOn, stateOff) {
    this.stateOn = `it is working`;
    this.stateOff = `it isn't working`;
};

function CPU(cap, crystal, specialTextoliteSubstrate, compositionCrystalCPU) {
    this.cap = cap;
    this.crystal = crystal;
    this.specialTextoliteSubstrate = specialTextoliteSubstrate;
    this.compositionCrystalCPU = compositionCrystalCPU;
};

const contentCPU = new CPU(`metal surface (cover) of the microprocessor`, `the most important and expensive to manufacture part of the microprocessor`, `all other parts of the processor are attached to it`, compositionCrystal);

// the Second class through prototype
CPU.prototype.volume = function (volumeCPU) {
    this.volumeCPU = 1;
};

function Keyboard(backgroundcolor, color, quantity) {
    this.backgroundcolor = backgroundcolor;
    this.color = color;
    this.quantity = quantity;
};

const contentKeyboard = new Keyboard(`black`, `white`, 104);

// the  third class through prototype
Keyboard.prototype.optionsButtons = function (pressingNumber, pressingLetters, pressingSpecialButtons) {
    this.pressingNumber = `the number from 0 to 9`;
    this.pressingLetters = `the letters from A to Z`;
    this.pressingSpecialButtons = `other buttons on the keyboard`;
};

function Computer(monitor, systemUnit, CPU, keyboard) {
    this.monitor = monitor;
    this.systemUnit = systemUnit;
    this.CPU = CPU;
    this.keyboard = keyboard;
};

const contentComputer = new Computer(`Monitor 27 inches`, `System unit wich have a good iron!`, contentCPU, contentKeyboard);


// the fourth class through prototype
Computer.prototype.dataInput = function (Keyboard, scanner, webcam, mouse, touchScreen) {
    this.Keyboard = Keyboard;
    this.scanner = `A device for translating graphic information into digital`;
    this.webcam = `small digital video or camera capable of real-time recording of video images intended for further transmission over a computer network`;
    this.mouse = `When it moves along the rug, the mouse pointer moves on the screen, with which you can point to objects and / or select them`;
    this.touchScreen = `input device, which is a screen that responds to it`;
};
Computer.prototype.informationOutput = function (monitor, printer, plotter, speakersAndHeadphones) {
    this.monitor = monitor;
    this.printer = `This device is for outputting digital information to paper`;
    this.plotter = `device for displaying data in graphical form on paper, plastic, photosensitive material or other media by drawing`;
    this.speakersAndHeadphones = `digital audio output devices`;
};


function Table(widthTable, heightTable, lengthTable, table, onTheTable) {
    this.widthTable = widthTable;
    this.heightTable = heightTable;
    this.lengthTable = lengthTable;
    this.table = table;
    this.onTheTable = onTheTable;
};

const contentTable = new Table("160 centimeters", "120 centimeters", "80 centimeters", "Write table", contentComputer);

// the fifth class through prototype
Table.prototype.displacemenOftTable = function (right, left, forward, back) {
    this.right = `movement to the right`;
    this.left = `movement to the left`;
    this.forward = `forward movement`;
    this.back = `backward movement`;
};

function TheCabinet(floor, wall, ceiling, compositionFloor, onTheFoor) {
    this.floor = floor;
    this.wall = wall;
    this.ceiling = ceiling;
    this.compositionFloor = compositionFloor;
    this.onTheFoor = onTheFoor;
};

const contentTheCabinet = new TheCabinet("just the floor", "just the a wall", "just ceiling", "The floor is wooden", contentTable);

// the sixth class through prototype
TheCabinet.prototype.people = function (sitDown, stand) {
    this.sitDown = `the student sits and listens to the teacher`;
    this.stand = `the student is waiting for the lesson to start`;
};

function TheCabinetNumber57(numberCabinet, heightCabinet, widthCabinet, lengthCabinet, inTheCabinet) {
    this.numberCabinet = numberCabinet;
    this.heightCabinet = heightCabinet;
    this.widthCabinet = widthCabinet;
    this.lengthCabinet = lengthCabinet;
    this.inTheCabinet = inTheCabinet;
};

const contentTheCabinetNumber57 = new TheCabinetNumber57(`CabinetNumber57`, `3 meters`, `12 meters`, `12 meters`, contentTheCabinet);

// the sixth class through prototype
TheCabinetNumber57.prototype.magic = function (education, sertificate) {
    this.education = `everyone who is in this office gets knowledge of a programming language JavaScript`;
    this.sertificate = `everyone who successfully completed the course receives a certificate`;
};

console.log(contentTheCabinetNumber57);
