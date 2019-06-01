function MonitorLaptop() {
    this.statusOn = 'the monitor of this laptop is work';
    this.statusOff = 'the monitor of this laptop is not work';
  };
  
  MonitorLaptop.prototype.showMovie = function(yes) {
    if (yes) {
        console.log('the laptop on the table,');
    };
  };
  
  export { MonitorLaptop };