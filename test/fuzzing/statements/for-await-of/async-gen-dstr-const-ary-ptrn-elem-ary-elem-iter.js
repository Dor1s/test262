var iterCount = 0;
async function *fn() {
  for await (const [[x, y, z] = [4, 5, 6]] of [[[7, 8, 9]]]) {
    assert.sameValue(x, 7);
    assert.sameValue(y, 8);
    assert.sameValue(z, 9);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);