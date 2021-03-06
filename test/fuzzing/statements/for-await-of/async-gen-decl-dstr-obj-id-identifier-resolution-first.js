let x = null;
let y;
let iterCount = 0;
async function * fn() {
  for await ({ x, y } of [{ x: 3 }]) {
    assert.sameValue(x, 3);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);