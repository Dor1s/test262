var callCount = 0;
class C {
  method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
}
C.prototype.method(42, 39);
var ref = C.prototype.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');