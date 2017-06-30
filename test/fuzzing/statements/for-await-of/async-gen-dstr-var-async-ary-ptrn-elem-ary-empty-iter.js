var initCount = 0;
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[[23]]];
})();
async function *fn() {
  for await (var [[] = function() { initCount += 1; }()] of asyncIter) {
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);