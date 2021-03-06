let x, y;
let iterCount = 0;
async function * fn() {
  for await ([...[x, y]] of [[null]]) {
    assert.sameValue(x, null);
    assert.sameValue(y, undefined);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);