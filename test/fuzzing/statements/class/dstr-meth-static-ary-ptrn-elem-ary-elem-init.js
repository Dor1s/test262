var callCount = 0;
class C {
  static method([[x, y, z] = [4, 5, 6]]) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    callCount = callCount + 1;
  }
};
C.method([]);
assert.sameValue(callCount, 1, 'method invoked exactly once');