var iterCount = 0;
async function fn() {
  for await (let { w: { x, y, z } = { x: 4, y: 5, z: 6 } } of [{ w: undefined }]) {
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