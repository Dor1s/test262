var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [iter];
})();
async function *fn() {
  for await (var [...[]] of asyncIter) {
    assert.sameValue(iterations, 1);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);