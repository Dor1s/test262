var callCount = 0;
class C {
  static *method([[x, y, z] = [4, 5, 6]]) {
    assert.sameValue(x, 7);
    assert.sameValue(y, 8);
    assert.sameValue(z, 9);
    callCount = callCount + 1;
  }
};
C.method([[7, 8, 9]]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');