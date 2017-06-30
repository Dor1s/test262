const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [...x] of [iter]) {
    return;
  }
}
fn();
assert.sameValue(iter.next().done, true, 'iteration occurred as expected');