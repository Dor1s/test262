var callCount = 0;
var C = class {
  method({ x: y = 33 }) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
new C().method({ });
assert.sameValue(callCount, 1, 'method invoked exactly once');