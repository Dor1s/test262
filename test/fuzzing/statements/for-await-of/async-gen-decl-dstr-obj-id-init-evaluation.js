let flag1 = false;
let flag2 = false;
let x, y;
let iterCount = 0;
async function * fn() {
  for await ({ x = flag1 = true, y = flag2 = true } of [{ y: 1 }]) {
    assert.sameValue(flag1, true);
    assert.sameValue(flag2, false);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);