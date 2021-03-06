var callCount = 0;
var obj = {
  *method(a, b,) {
    assert.sameValue(a, 42);
    assert.sameValue(b, 39);
    callCount = callCount + 1;
  }
};
obj.method(42, 39, 1).next();
var ref = obj.method;
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
assert.sameValue(ref.length, 2, 'length is properly set');