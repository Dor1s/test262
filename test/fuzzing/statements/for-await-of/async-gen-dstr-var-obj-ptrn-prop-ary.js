var iterCount = 0;
async function *fn() {
  for await (var { w: [x, y, z] = [4, 5, 6] } of [{ w: [7, undefined, ] }]) {
    assert.sameValue(x, 7);
    assert.sameValue(y, undefined);
    assert.sameValue(z, undefined);
    assert.throws(ReferenceError, function() {
      w;
    });
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);