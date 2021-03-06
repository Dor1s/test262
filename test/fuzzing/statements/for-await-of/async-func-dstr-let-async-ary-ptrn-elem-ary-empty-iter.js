var initCount = 0;
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[[23]]];
})();
async function fn() {
  for await (let [[] = function() { initCount += 1; }()] of asyncIter) {
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);