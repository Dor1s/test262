var callCount = 0;
class C {
  static *method(a, b = 39,) {
    assert.sameValue(a, 42);
    assert.sameValue(b, 39);
    callCount = callCount + 1;
  }
}
C.method(42, undefined, 1).next();
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');