import { Room57 } from "./modules/Room57.js";


const room57 = new Room57(57, 12, 3, 12);
room57.projector.show(true, false);
room57.airCondition.blow(16, 25);
room57.table.locate(true);
room57.table.laptop.open(true);
room57.table.laptop.monitor.showMovie(true);

console.log(room57);