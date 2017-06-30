var callCount = 0;
class C {
  method([...[x, y, z]] = [3, 4, 5]) {
    assert.sameValue(x, 3);
    assert.sameValue(y, 4);
    assert.sameValue(z, 5);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');