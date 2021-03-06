var iterCount = 0;
async function *fn() {
  for await (let [, , ...x] of [[1, 2]]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);