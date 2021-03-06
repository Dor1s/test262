var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{}];
})();
async function fn() {
  for await (const { w: [x, y, z] = [4, 5, 6] } of asyncIter) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    assert.throws(ReferenceError, function() {
      w;
    });
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);