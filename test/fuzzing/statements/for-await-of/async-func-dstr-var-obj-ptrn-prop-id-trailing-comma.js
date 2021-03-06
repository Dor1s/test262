var iterCount = 0;
async function fn() {
  for await (var { x: y, } of [{ x: 23 }]) {
    assert.sameValue(y, 23);
    assert.throws(ReferenceError, function() {
      x;
    });
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);