var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var obj = {
  async *method([...[]] = iter) {
    assert.sameValue(iterations, 1);
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);