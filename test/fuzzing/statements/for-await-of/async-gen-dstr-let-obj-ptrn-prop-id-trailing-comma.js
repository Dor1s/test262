var iterCount = 0;
async function *fn() {
  for await (let { x: y, } of [{ x: 23 }]) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);