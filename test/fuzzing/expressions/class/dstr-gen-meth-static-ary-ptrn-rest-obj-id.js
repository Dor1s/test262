var callCount = 0;
var C = class {
  static *method([...{ length }]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
C.method([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');