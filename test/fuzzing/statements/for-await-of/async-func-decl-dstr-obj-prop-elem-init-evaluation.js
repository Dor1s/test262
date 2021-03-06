let flag1 = false;
let flag2 = false;
let x, y;
let iterCount = 0;
async function fn() {
  for await ({ x: x = flag1 = true, y: y = flag2 = true } of [{ y: 1 }]) {
    assert.sameValue(x, true, 'value of `x`');
    assert.sameValue(flag1, true, 'value of `flag1`');
    assert.sameValue(y, 1, 'value of `y`');
    assert.sameValue(flag2, false, 'value of `flag2`');
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);