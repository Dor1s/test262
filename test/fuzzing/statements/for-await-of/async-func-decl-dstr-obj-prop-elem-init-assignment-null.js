let x;
let iterCount = 0;
async function fn() {
  for await ({ y: x = 1 } of [{ y: null }]) {
    assert.sameValue(x, null);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);