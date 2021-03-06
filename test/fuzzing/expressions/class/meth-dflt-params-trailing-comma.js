var callCount = 0;
var C = class {
  method(a, b = 39,) {
    assert.sameValue(a, 42);
    assert.sameValue(b, 39);
    callCount = callCount + 1;
  }
};
C.prototype.method(42, undefined, 1);
var ref = C.prototype.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');