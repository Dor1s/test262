var initCount = 0;
var iterCount = 0;
async function *fn() {
  for await (let [[] = function() { initCount += 1; }()] of [[[23]]]) {
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);