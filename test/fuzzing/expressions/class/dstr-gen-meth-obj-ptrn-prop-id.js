var callCount = 0;
var C = class {
  *method({ x: y }) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
new C().method({ x: 23 }).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');