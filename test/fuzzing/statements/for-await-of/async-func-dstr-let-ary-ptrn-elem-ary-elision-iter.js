var callCount = 0;
function* g() {
  callCount += 1;
};
var iterCount = 0;
async function fn() {
  for await (let [[,] = g()] of [[[]]]) {
    assert.sameValue(callCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);