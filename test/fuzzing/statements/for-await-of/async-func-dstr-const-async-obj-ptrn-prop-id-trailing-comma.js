var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ x: 23 }];
})();
async function fn() {
  for await (const { x: y, } of asyncIter) {
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