let y;
let iterCount = 0;
async function * fn() {
  for await ({ x: [y] } of [{ x: [321] }]) {
    assert.sameValue(y, 321);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);