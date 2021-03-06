var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[{ u: 777, w: 888, y: 999 }]];
})();
async function *fn() {
  for await (const [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] of asyncIter) {
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
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);