const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [,] = iter; ; ) {
    return;
  }
}
fn();
assert.sameValue(iter.next().done, true, 'iteration occurred as expected');