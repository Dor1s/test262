var callCount = 0;
var obj = {
  *method({ x: y = 33 }) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
obj.method({ }).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');