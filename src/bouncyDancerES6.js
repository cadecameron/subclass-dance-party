window.makeBouncyDancer = class makeBouncyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('sway');
  }
  step() {
    oldStep.call(this);
    this.$node.toggleClass('sway');
  };
};
