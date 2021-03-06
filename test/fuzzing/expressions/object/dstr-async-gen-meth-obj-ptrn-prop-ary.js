var callCount = 0;
var obj = {
  async *method({ w: [x, y, z] = [4, 5, 6] }) {
    assert.sameValue(x, 7);
    assert.sameValue(y, undefined);
    assert.sameValue(z, undefined);
    assert.throws(ReferenceError, function() {
      w;
    });
    callCount = callCount + 1;
  }
};
obj.method({ w: [7, undefined, ] }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);