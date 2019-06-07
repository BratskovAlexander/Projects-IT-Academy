import { Room57 } from "./script/Room57.js";


const room57 = new Room57(57, 12, 3, 12);

room57.table.locate(true);
room57.table.checkWhoseTable('table for a teacher');
room57.projector.show(true, false);
room57.projector.checkStateProjector('sleeping');
room57.airCondition.blow(16, 25);
room57.airCondition.checkNamecondition('Siemens');
room57.table.laptop.open(true);
room57.table.laptop.checkQuantityButton(104);
room57.table.laptop.monitor.showMovie(true);
room57.table.laptop.monitor.checkStateMonitor('sleeping');



console.log(room57);


