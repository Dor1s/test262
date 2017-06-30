let x;
let iterCount = 0;
async function * fn() {
  for await ([, ...x] of [[1, 2, 3]]) {
    assert.sameValue(x.length, 2);
    assert.sameValue(x[0], 2);
    assert.sameValue(x[1], 3);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);