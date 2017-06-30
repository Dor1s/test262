var callCount = 0;
var obj = {
  *method([_, x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');