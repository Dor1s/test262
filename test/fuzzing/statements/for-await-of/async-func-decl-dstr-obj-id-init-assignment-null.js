let x;
let iterCount = 0;
async function fn() {
  for await ({ x = 1 } of [{ x: null }]) {
    assert.sameValue(x, null);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);