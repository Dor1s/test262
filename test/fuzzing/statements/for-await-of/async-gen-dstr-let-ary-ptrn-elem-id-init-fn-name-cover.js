var iterCount = 0;
async function *fn() {
  for await (let [cover = (function () {}), xCover = (0, function() {})] of [[]]) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);