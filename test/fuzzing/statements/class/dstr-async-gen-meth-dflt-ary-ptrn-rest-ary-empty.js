var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
class C {
  async *method([...[]] = iter) {
    assert.sameValue(iterations, 1);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);