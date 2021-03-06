var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ }];
})();
async function fn() {
  for await (let { x: y = 33 } of asyncIter) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);