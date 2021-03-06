var callCount = 0;
var C = class {
  *method([...[x, y, z]] = [3, 4, 5]) {
    assert.sameValue(x, 3);
    assert.sameValue(y, 4);
    assert.sameValue(z, 5);
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');