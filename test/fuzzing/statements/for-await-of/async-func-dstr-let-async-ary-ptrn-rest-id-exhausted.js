var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[1, 2]];
})();
async function fn() {
  for await (let [, , ...x] of asyncIter) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);