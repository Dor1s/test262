var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[values]];
})();
async function *fn() {
  for await (var [[...x] = function() { initCount += 1; }()] of asyncIter) {
    assert(Array.isArray(x));
    assert.sameValue(x[0], 2);
    assert.sameValue(x[1], 1);
    assert.sameValue(x[2], 3);
    assert.sameValue(x.length, 3);
    assert.notSameValue(x, values);
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);