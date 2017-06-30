var callCount = 0;
var obj = {
  async *method({ x, }) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
obj.method({ x: 23 }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);