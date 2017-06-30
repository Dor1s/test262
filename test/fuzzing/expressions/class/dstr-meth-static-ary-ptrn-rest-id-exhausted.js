var callCount = 0;
var C = class {
  static method([, , ...x]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    callCount = callCount + 1;
  }
};
C.method([1, 2]);
assert.sameValue(callCount, 1, 'method invoked exactly once');