var callCount = 0;
function* g() {
  callCount += 1;
};
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [[[]]];
})();
async function fn() {
  for await (let [[,] = g()] of asyncIter) {
    assert.sameValue(callCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);