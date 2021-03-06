var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[1, 2, 3]];
})();
async function fn() {
  for await (let [x, y, z] of asyncIter) {
    assert.sameValue(x, 1);
    assert.sameValue(y, 2);
    assert.sameValue(z, 3);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);