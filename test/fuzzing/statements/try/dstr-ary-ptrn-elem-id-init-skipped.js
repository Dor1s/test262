var initCount = 0;
function counter() {
  initCount += 1;
}
var ranCatch = false;
try {
  throw [null, 0, false, ''];
} catch ([w = counter(), x = counter(), y = counter(), z = counter()]) {
  assert.sameValue(w, null);
  assert.sameValue(x, 0);
  assert.sameValue(y, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');