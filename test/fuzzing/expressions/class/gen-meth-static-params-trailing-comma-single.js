var callCount = 0;
var C = class {
  static *method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
};
C.method(42, 39).next();
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');