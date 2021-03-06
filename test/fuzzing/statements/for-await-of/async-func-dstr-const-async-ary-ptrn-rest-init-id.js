throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function fn() {
  for await (const [...x = []] of asyncIter) {
    
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);