var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ x: [45] }];
})();
async function *fn() {
  for await (let { x: [y], } of asyncIter) {
    assert.sameValue(y,45);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);