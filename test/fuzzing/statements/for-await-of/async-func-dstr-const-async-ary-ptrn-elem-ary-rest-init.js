var values = [2, 1, 3];
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function fn() {
  for await (const [[...x] = values] of asyncIter) {
    assert(Array.isArray(x));
    assert.sameValue(x[0], 2);
    assert.sameValue(x[1], 1);
    assert.sameValue(x[2], 3);
    assert.sameValue(x.length, 3);
    assert.notSameValue(x, values);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);