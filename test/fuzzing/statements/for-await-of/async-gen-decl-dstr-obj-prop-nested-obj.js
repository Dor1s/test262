let result, y;
let iterCount = 0;
async function * fn() {
  for await ({ x: { y } } of [{ x: { y: 2 } }]) {
    assert.sameValue(y, 2);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);