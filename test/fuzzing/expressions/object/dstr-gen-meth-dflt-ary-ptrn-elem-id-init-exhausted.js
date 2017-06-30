var callCount = 0;
var obj = {
  *method([x = 23] = []) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');