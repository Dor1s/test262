var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[,]];
})();
async function *fn() {
  for await (var [x = 23] of asyncIter) {
    assert.sameValue(x, 23);
    // another statement
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);