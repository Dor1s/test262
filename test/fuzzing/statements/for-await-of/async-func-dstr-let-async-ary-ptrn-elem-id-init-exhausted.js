var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function fn() {
  for await (let [x = 23] of asyncIter) {
    assert.sameValue(x, 23);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);