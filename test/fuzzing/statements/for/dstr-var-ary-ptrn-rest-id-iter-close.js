const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (var [...x] = iter; ; ) {
    return;
  }
}
fn();
assert.sameValue(iter.next().done, true, 'iteration occurred as expected');