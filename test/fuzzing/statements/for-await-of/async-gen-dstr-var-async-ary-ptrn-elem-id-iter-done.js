var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function *fn() {
  for await (var [_, x] of asyncIter) {
    assert.sameValue(x, undefined);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);