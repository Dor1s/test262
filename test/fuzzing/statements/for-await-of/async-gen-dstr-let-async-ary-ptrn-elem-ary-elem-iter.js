var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[[7, 8, 9]]];
})();
async function *fn() {
  for await (let [[x, y, z] = [4, 5, 6]] of asyncIter) {
    assert.sameValue(x, 7);
    assert.sameValue(y, 8);
    assert.sameValue(z, 9);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);