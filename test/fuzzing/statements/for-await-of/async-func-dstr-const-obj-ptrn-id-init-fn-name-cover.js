var iterCount = 0;
async function fn() {
  for await (const { cover = (function () {}), xCover = (0, function() {})  } of [{}]) {
    assert.sameValue(cover.name, 'cover');
    assert.notSameValue(xCover.name, 'xCover');
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);