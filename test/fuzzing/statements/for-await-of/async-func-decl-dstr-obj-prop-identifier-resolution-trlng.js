let x = null;
let iterCount = 0;
async function fn() {
  for await ({ a: x, } of [{ a: 2 }]) {
    assert.sameValue(x, 2);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);