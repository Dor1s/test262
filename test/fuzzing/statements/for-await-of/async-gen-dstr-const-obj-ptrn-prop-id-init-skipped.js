var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
async function *fn() {
  for await (const { s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter() } of [{ s: null, u: 0, w: false, y: '' }]) {
    assert.sameValue(t, null);
    assert.sameValue(v, 0);
    assert.sameValue(x, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    assert.throws(ReferenceError, function() {
      s;
    });
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