var callCount = 0;
var C = class {
  static method([_, x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');