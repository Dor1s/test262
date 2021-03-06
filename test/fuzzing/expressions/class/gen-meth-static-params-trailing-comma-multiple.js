var callCount = 0;
var C = class {
  static *method(a, b,) {
    assert.sameValue(a, 42);
    assert.sameValue(b, 39);
    callCount = callCount + 1;
  }
};
C.method(42, 39, 1).next();
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(ref.length, 2, 'length is properly set');