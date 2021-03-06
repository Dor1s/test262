let flag1 = false, flag2 = false;
let _;
let iterCount = 0;
async function fn() {
  for await ([ _ = flag1 = true, _ = flag2 = true ] of [[14]]) {
    assert.sameValue(flag1, false);
    assert.sameValue(flag2, true);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);