var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var iterCount = 0;
async function fn() {
  for await (let [] of [iter]) {
    assert.sameValue(iterations, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);