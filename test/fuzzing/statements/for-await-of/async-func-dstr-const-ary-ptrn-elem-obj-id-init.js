var iterCount = 0;
async function fn() {
  for await (const [{ x, y, z } = { x: 44, y: 55, z: 66 }] of [[]]) {
    assert.sameValue(x, 44);
    assert.sameValue(y, 55);
    assert.sameValue(z, 66);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);