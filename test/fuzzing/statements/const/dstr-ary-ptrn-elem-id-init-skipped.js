var initCount = 0;
function counter() {
  initCount += 1;
}
const [w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, ''];
assert.sameValue(w, null);
assert.sameValue(x, 0);
assert.sameValue(y, false);
assert.sameValue(z, '');
assert.sameValue(initCount, 0);