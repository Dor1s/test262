var callCount = 0;
var obj = {
  method([...{ length }] = [1, 2, 3]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');