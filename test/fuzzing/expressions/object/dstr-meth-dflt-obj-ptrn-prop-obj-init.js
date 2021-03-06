var callCount = 0;
var obj = {
  method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: undefined }) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    assert.throws(ReferenceError, function() {
      w;
    });
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');