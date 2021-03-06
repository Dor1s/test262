var callCount = 0;
var C = class {
  static *method([...{ length }] = [1, 2, 3]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');