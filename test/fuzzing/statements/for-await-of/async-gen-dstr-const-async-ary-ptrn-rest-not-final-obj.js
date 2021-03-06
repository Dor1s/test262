throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[1, 2, 3]];
})();
async function *fn() {
  for await (const [...{ x }, y] of asyncIter) {
    
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);