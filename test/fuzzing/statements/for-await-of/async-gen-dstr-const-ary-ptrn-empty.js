var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var iterCount = 0;
async function *fn() {
  for await (const [] of [iter]) {
    assert.sameValue(iterations, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);