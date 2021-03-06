var iterCount = 0;
async function *fn() {
  for await (const [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] of [[]]) {
    assert.sameValue(v, 444);
    assert.sameValue(x, 555);
    assert.sameValue(z, 666);
    assert.throws(ReferenceError, function() {
      u;
    });
    assert.throws(ReferenceError, function() {
      w;
    });
    assert.throws(ReferenceError, function() {
      y;
    });
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);