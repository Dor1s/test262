var callCount = 0;
var obj = {
  method([_, x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');