let x = null;
let iterCount = 0;
async function * fn() {
  for await ({ x } of [{ x: 1 }]) {
    assert.sameValue(x, 1);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);