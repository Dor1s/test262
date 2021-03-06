var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ w: undefined }];
})();
async function fn() {
  for await (var { w: { x, y, z } = { x: 4, y: 5, z: 6 } } of asyncIter) {
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