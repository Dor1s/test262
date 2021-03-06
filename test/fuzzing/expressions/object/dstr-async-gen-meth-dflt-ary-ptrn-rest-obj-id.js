var callCount = 0;
var obj = {
  async *method([...{ length }] = [1, 2, 3]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);