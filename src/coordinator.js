var makeCoordinator = function (shape) {
  this.shape = shape;
  this.dancers = window.dancers;
  this.dancerCount = this.dancers.length;

  // determine which shape was passed into the function
  if (shape === 'line') {
    var positionObj = lineCalculator(this.dancerCount);
    this.dancers.forEach((dancer, i) => {
      var left = positionObj.dancerStart + (i * positionObj.spread);
      dancer.setPosition(positionObj.top, left);
    });

  } else if (shape === 'circle') {
    var positionObj = circleCalculator(this.dancerCount);
    this.dancers.forEach((dancer, i) => {
      // TODO: apply positions for circle
    });
  }
};

var circleCalculator = function (dancerCount) {
  // TODO: calculate positions
};

var lineCalculator = function (dancerCount) {
  return {
    top: (window.innerHeight / 3),
    spread: ((window.innerWidth * 0.9) / (dancerCount - 1)),
    dancerStart: (window.innerWidth * 0.05)
  };
};
