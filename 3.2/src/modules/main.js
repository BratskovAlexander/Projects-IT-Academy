
const crystalCPU = {
    compositionCrystal: "Crystal is made of silicon(!==silicone)",
}

const CPU = {
    cap: "metal surface (cover) of the microprocessor",
    crystal: "the most important and expensive to manufacture part of the microprocessor",
    specialTextoliteSubstrate: "all other parts of the processor are attached to it",
    compositionCrystalCPU: crystalCPU,
}

// const keyboard = {
//     backgroundcolor: "black",
//     color: "white",
//     quantity: 104,
// };

const computer = {
    monitor: "Monitor 27 inches",
    systemUnit: "System unit wich have a good iron!",
    keyboard: {
        backgroundColor: "black",
        color: "white",
        quantity: 104,
    },
    CPU: CPU,
};

const table = {
    widthTable: '160 centimeters',
    heightTable: "120 centimeters",
    lengthTable: "80 centimeters",
    table: "Write table",
};
table.onTheTable = computer;

const floor = {
    floor: "just the floor",
    wall: "just the a wall",
    ceiling: "just ceiling",
    compositionFloor: "The floor is wooden",
}
floor.onTheFoor = table;

const class57 = {
    cabinet: "class57",
    heightCabinet: "3 meters",
    widthCabinet: "12 meters",
    lengthCabinet: "12 meters",
    inTheCabinet: floor,
};


console.log(class57);