var iterCount = 0;
async function fn() {
  for await (let [x = 23] of [[,]]) {
    assert.sameValue(x, 23);
    // another statement
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);