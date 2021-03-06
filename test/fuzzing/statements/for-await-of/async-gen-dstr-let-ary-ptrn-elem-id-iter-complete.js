var iterCount = 0;
async function *fn() {
  for await (let [x] of [[]]) {
    assert.sameValue(x, undefined);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);