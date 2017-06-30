var callCount = 0;
var obj = {
  async *method([x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);