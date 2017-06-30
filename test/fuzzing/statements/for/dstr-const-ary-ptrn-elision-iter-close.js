const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [,] = iter; ; ) {
    return;
  }
}
fn();
assert.sameValue(iter.next().done, true, 'iteration occurred as expected');