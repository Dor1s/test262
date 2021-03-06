var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[null, 0, false, '']];
})();
async function fn() {
  for await (const [w = counter(), x = counter(), y = counter(), z = counter()] of asyncIter) {
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