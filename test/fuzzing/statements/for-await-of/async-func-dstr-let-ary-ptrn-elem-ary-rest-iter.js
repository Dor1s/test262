var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
async function fn() {
  for await (let [[...x] = function() { initCount += 1; }()] of [[values]]) {
    assert(Array.isArray(x));
    assert.sameValue(x[0], 2);
    assert.sameValue(x[1], 1);
    assert.sameValue(x[2], 3);
    assert.sameValue(x.length, 3);
    assert.notSameValue(x, values);
    assert.sameValue(initCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);