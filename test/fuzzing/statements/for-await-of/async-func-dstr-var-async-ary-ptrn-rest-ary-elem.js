var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[3, 4, 5]];
})();
async function fn() {
  for await (var [...[x, y, z]] of asyncIter) {
    assert.sameValue(x, 3);
    assert.sameValue(y, 4);
    assert.sameValue(z, 5);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);