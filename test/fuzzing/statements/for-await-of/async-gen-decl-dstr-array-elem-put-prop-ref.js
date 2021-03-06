let x = {};
let iterCount = 0;
async function * fn() {
  for await ([x.y] of [[4]]) {
    assert.sameValue(x.y, 4);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);