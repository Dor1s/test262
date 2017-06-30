let yield = 3;
let x;
let iterCount = 0;
async function fn() {
  for await ({ x = yield } of [{}]) {
    assert.sameValue(x, 3);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);