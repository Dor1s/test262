var callCount = 0;
var C = class {
  static *method([x = 23] = [,]) {
    assert.sameValue(x, 23);
    // another statement
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');