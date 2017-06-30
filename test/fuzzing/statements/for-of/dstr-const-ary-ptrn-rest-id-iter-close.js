const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [...x] of [iter]) {
    return;
  }
}
fn();
assert.sameValue(iter.next().done, true, 'iteration occurred as expected');