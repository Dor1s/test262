var iterCount = 0;
async function fn() {
  for await (const [x = 23] of [[undefined]]) {
    assert.sameValue(x, 23);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);