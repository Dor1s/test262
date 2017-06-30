var callCount = 0;
var C = class {
  method([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) {
    assert.sameValue(x, 7);
    assert.sameValue(y, 8);
    assert.sameValue(z, 9);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');