var callCount = 0;
var C = class {
  method([...{ length }]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
new C().method([1, 2, 3]);
assert.sameValue(callCount, 1, 'method invoked exactly once');