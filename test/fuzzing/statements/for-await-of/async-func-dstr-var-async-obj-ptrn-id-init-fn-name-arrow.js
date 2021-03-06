var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{}];
})();
async function fn() {
  for await (var { arrow = () => {} } of asyncIter) {
    assert.sameValue(arrow.name, 'arrow');
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);