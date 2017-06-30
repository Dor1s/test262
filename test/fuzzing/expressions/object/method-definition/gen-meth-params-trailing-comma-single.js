var callCount = 0;
var obj = {
  *method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
};
obj.method(42, 39).next();
var ref = obj.method;
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');