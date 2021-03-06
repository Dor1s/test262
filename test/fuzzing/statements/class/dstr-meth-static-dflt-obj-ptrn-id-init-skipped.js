var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  static method({ w = counter(), x = counter(), y = counter(), z = counter() } = { w: null, x: 0, y: false, z: '' }) {
    assert.sameValue(w, null);
    assert.sameValue(x, 0);
    assert.sameValue(y, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');