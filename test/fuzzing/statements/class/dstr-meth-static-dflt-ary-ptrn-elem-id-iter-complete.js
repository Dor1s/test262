var callCount = 0;
class C {
  static method([x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');