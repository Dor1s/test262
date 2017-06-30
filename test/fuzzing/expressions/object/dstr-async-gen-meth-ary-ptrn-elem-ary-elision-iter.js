var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var obj = {
  async *method([[,] = g()]) {
    assert.sameValue(callCount, 0);
    callCount = callCount + 1;
  }
};
obj.method([[]]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);