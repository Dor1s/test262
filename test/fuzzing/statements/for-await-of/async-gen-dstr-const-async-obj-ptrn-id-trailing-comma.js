var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ x: 23 }];
})();
async function *fn() {
  for await (const { x, } of asyncIter) {
    assert.sameValue(x, 23);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);