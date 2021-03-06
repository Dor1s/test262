let x;
let iterCount = 0;
async function * fn() {
  for await ({ x = 1 } of [{ x: undefined }]) {
    assert.sameValue(x, 1);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);