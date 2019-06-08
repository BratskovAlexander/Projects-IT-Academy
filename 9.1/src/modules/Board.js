    function Board (widthBoard, heightBoard) {
        this.widthBoard = widthBoard;
        this.heightBoard = heightBoard;
        this.changeSize = function() {
          console.log(`Width of board: ${widthBoard}, and height of board: ${heightBoard}`);
        }
        this.color = 'white';
        this.changeColor = function () {
          this.color = 'green';
      };
      };

      Board.prototype.changeColor = function(color) {
        this.color = color;
        color = 'black';
      };

      export { Board };