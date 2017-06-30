var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
for (let { w = counter(), x = counter(), y = counter(), z = counter() } = { w: null, x: 0, y: false, z: '' }; iterCount < 1; ) {
  assert.sameValue(w, null);
  assert.sameValue(x, 0);
  assert.sameValue(y, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');