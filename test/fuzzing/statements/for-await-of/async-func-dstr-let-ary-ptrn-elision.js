var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var iterCount = 0;
async function fn() {
  for await (let [,] of [g()]) {
    assert.sameValue(first, 1);
    assert.sameValue(second, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);