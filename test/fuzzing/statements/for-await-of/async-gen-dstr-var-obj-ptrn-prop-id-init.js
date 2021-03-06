var iterCount = 0;
async function *fn() {
  for await (var { x: y = 33 } of [{ }]) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);