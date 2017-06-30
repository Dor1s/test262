var callCount = 0;
class C {
  static *method({ x, }) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
C.method({ x: 23 }).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');