const iter = (function* () {
  yield;
  yield;
})();
async function* fn() {
  for await (var [,] of [iter]) {
    return;
  }
}
fn()
  .next()
  .then(() => {
    assert.sameValue(iter.next().done, true, 'iteration occurred as expected');
  })
  .then($DONE, $DONE);