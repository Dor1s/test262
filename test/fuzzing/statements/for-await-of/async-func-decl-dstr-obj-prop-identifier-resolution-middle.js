let x = null;
let w, y;
let iterCount = 0;
async function fn() {
  for await ({ w, a: x, y } of [{ a: 5 }]) {
    assert.sameValue(x, 5);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);