var values = [1, 2, 3, 4, 5];
var iterCount = 0;
async function *fn() {
  for await (var [ , , ...x] of [values]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 3);
    assert.sameValue(x[0], 3);
    assert.sameValue(x[1], 4);
    assert.sameValue(x[2], 5);
    assert.notSameValue(x, values);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);