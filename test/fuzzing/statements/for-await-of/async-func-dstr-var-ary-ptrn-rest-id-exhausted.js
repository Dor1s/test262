var iterCount = 0;
async function fn() {
  for await (var [, , ...x] of [[1, 2]]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);