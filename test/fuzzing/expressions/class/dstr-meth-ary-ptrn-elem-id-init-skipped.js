var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var C = class {
  method([w = counter(), x = counter(), y = counter(), z = counter()]) {
    assert.sameValue(w, null);
    assert.sameValue(x, 0);
    assert.sameValue(y, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
new C().method([null, 0, false, '']);
assert.sameValue(callCount, 1, 'method invoked exactly once');