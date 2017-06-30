var callCount = 0;
class C {
  *method([...{ length }]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
new C().method([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');