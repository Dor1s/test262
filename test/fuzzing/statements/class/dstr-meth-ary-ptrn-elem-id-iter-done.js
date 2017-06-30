var callCount = 0;
class C {
  method([_, x]) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
new C().method([]);
assert.sameValue(callCount, 1, 'method invoked exactly once');