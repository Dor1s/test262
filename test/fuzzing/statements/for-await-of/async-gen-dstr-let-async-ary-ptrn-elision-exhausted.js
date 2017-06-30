var iter = function*() {}();
iter.next();
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [iter];
})();
async function *fn() {
  for await (let [,] of asyncIter) {
    
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);