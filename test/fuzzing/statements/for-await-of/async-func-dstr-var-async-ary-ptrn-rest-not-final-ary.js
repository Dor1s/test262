throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[1, 2, 3]];
})();
async function fn() {
  for await (var [...[x], y] of asyncIter) {
    
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);