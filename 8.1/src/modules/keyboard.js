function Keyboard(backgroundcolor, color, quantity) {
  this.backgroundcolor = backgroundcolor;
  this.color = color;
  this.quantity = quantity;
};

Keyboard.prototype.optionsButtons = function (pressingNumber, pressingLetters, pressingSpecialButtons) {
  this.pressingNumber = 'the number from 0 to 9';
  this.pressingLetters = 'the letters from A to Z';
  this.pressingSpecialButtons = 'other buttons on the keyboard';
};

export { Keyboard };