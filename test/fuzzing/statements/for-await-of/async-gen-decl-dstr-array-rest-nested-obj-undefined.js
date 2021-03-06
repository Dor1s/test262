let x = null;
let length;
let iterCount = 0;
async function * fn() {
  for await ([...{ 0: x, length }] of [[]]) {
    assert.sameValue(x, undefined);
    assert.sameValue(length, 0);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);