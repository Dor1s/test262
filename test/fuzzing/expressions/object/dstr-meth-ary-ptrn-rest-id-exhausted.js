var callCount = 0;
var obj = {
  method([, , ...x]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    callCount = callCount + 1;
  }
};
obj.method([1, 2]);
assert.sameValue(callCount, 1, 'method invoked exactly once');