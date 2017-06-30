var callCount = 0;
class C {
  *method([...{ length }] = [1, 2, 3]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');