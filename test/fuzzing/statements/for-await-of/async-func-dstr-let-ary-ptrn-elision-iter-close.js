const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (let [,] of [iter]) {
    return;
  }
}
fn()
  .then(() => {
    assert.sameValue(iter.next().done, true, 'iteration occurred as expected');
  })
  .then($DONE, $DONE);