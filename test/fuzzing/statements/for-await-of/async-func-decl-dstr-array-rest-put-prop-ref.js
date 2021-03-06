let x = {};
let iterCount = 0;
async function fn() {
  for await ([...x.y] of [[4, 3, 2]]) {
    assert.sameValue(x.y.length, 3);
    assert.sameValue(x.y[0], 4);
    assert.sameValue(x.y[1], 3);
    assert.sameValue(x.y[2], 2);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);