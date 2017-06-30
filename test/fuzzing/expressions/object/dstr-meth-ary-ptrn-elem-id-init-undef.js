var callCount = 0;
var obj = {
  method([x = 23]) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
obj.method([undefined]);
assert.sameValue(callCount, 1, 'method invoked exactly once');