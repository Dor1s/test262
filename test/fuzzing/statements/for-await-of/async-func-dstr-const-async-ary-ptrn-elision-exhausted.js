var iter = function*() {}();
iter.next();
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [iter];
})();
async function fn() {
  for await (const [,] of asyncIter) {
    
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);