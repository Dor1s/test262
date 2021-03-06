var callCount = 0;
var obj = {
  async *method([...[x, y, z]]) {
    assert.sameValue(x, 3);
    assert.sameValue(y, 4);
    assert.sameValue(z, 5);
    callCount = callCount + 1;
  }
};
obj.method([3, 4, 5]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);