var callCount = 0;
var C = class {
  static *method([...[x, y, z]]) {
    assert.sameValue(x, 3);
    assert.sameValue(y, 4);
    assert.sameValue(z, 5);
    callCount = callCount + 1;
  }
};
C.method([3, 4, 5]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');