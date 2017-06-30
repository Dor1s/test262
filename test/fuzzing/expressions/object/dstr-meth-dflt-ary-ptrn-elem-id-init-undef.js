var callCount = 0;
var obj = {
  method([x = 23] = [undefined]) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');