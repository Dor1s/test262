var iterCount = 0;
async function fn() {
  for await (const { w: { x, y, z } = { x: 4, y: 5, z: 6 } } of [{ w: { x: undefined, z: 7 } }]) {
    assert.sameValue(x, undefined);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 7);
    assert.throws(ReferenceError, function() {
      w;
    });
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);