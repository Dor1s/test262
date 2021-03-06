var callCount = 0;
var C = class {
  *method([[x, y, z] = [4, 5, 6]] = []) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');