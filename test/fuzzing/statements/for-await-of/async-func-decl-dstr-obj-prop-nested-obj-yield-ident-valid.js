let yield = 2;
let result, x;
let iterCount = 0;
async function fn() {
  for await ({ x: { x = yield } } of [{ x: {} }]) {
    assert.sameValue(x, 2);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);