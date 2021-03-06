var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[]];
})();
async function *fn() {
  for await (const [cover = (function () {}), xCover = (0, function() {})] of asyncIter) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);