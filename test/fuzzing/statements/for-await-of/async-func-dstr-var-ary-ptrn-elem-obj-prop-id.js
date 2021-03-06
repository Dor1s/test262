var iterCount = 0;
async function fn() {
  for await (var [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] of [[{ u: 777, w: 888, y: 999 }]]) {
    assert.sameValue(v, 777);
    assert.sameValue(x, 888);
    assert.sameValue(z, 999);
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
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);