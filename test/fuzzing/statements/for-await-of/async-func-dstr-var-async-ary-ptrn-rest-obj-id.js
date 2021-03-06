var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[1, 2, 3]];
})();
async function fn() {
  for await (var [...{ length }] of asyncIter) {
    assert.sameValue(length, 3);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);