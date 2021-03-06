var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
async function fn() {
  for await (let [w = counter(), x = counter(), y = counter(), z = counter()] of [[null, 0, false, '']]) {
    assert.sameValue(w, null);
    assert.sameValue(x, 0);
    assert.sameValue(y, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);