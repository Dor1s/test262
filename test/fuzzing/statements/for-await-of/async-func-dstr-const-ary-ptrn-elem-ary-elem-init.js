var iterCount = 0;
async function fn() {
  for await (const [[x, y, z] = [4, 5, 6]] of [[]]) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);