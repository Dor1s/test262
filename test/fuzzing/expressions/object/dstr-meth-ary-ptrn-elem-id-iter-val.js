var callCount = 0;
var obj = {
  method([x, y, z]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, 2);
    assert.sameValue(z, 3);
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]);
assert.sameValue(callCount, 1, 'method invoked exactly once');