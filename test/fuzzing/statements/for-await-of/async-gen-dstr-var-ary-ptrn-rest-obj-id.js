var iterCount = 0;
async function *fn() {
  for await (var [...{ length }] of [[1, 2, 3]]) {
    assert.sameValue(length, 3);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);