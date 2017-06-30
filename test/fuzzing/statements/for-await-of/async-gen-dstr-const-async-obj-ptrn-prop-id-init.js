var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ }];
})();
async function *fn() {
  for await (const { x: y = 33 } of asyncIter) {
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