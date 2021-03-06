var callCount = 0;
var C = class {
  *method([x, y, z]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, 2);
    assert.sameValue(z, 3);
    callCount = callCount + 1;
  }
};
new C().method([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');