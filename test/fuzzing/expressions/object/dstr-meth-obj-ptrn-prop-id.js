var callCount = 0;
var obj = {
  method({ x: y }) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
obj.method({ x: 23 });
assert.sameValue(callCount, 1, 'method invoked exactly once');