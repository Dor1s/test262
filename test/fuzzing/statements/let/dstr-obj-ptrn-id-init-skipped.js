var initCount = 0;
function counter() {
  initCount += 1;
}
let { w = counter(), x = counter(), y = counter(), z = counter() } = { w: null, x: 0, y: false, z: '' };
assert.sameValue(w, null);
assert.sameValue(x, 0);
assert.sameValue(y, false);
assert.sameValue(z, '');
assert.sameValue(initCount, 0);