let xCover, cover;
let iterCount = 0;
async function * fn() {
  for await ({ x: xCover = (0, function() {}), x: cover = (function() {}) } of [{}]) {
    assert.notSameValue(xCover.name, 'xCover');
    assert.sameValue(cover.name, 'cover');
    verifyNotEnumerable(cover, 'name');
    verifyNotWritable(cover, 'name');
    verifyConfigurable(cover, 'name');
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);