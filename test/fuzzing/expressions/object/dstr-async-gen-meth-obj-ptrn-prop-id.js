var callCount = 0;
var obj = {
  async *method({ x: y }) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
obj.method({ x: 23 }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);