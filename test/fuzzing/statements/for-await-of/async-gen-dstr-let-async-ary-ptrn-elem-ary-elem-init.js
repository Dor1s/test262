var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function *fn() {
  for await (let [[x, y, z] = [4, 5, 6]] of asyncIter) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);