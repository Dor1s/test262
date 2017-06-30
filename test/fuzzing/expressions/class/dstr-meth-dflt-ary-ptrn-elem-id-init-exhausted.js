var callCount = 0;
var C = class {
  method([x = 23] = []) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');