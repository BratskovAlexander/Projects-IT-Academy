function MonitorLaptop() {
    this.statusOn = 'the monitor of this laptop is work';
    this.statusOff = 'the monitor of this laptop is not work';
    const checkLevelBright = function(level){
      console.log(`Brightness level laptop monitor: ${level}`);
  };
  checkLevelBright('100%');
  this.checkStateMonitor = function(sleep) {
    console.log(`Laptop is ${sleep} `);
  };
  };
  
  
  MonitorLaptop.prototype.showMovie = function(yes) {
    if (yes) {
        console.log('the laptop on the table,');
    };     
    const checkstateMonitorLaptop = new MonitorLaptop();
    checkstateMonitorLaptop.checkStateMonitor('not slipping');
  };
  
  export { MonitorLaptop };