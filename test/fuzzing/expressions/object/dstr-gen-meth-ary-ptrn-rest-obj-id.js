var callCount = 0;
var obj = {
  *method([...{ length }]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');