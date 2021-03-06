var iterCount = 0;
async function *fn() {
  for await (let [x = 23] of [[]]) {
    assert.sameValue(x, 23);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);