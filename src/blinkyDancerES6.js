var oldStep = makeDancer.prototype.step;

window.makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('blinkyDancer');
  };

  step() {
    oldStep.call(this);
    this.$node.toggle();
  };
};
