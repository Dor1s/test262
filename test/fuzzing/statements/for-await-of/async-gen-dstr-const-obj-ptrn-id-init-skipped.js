var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
async function *fn() {
  for await (const { w = counter(), x = counter(), y = counter(), z = counter() } of [{ w: null, x: 0, y: false, z: '' }]) {
    assert.sameValue(w, null);
    assert.sameValue(x, 0);
    assert.sameValue(y, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);