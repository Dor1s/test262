let x = null;
let w;
let iterCount = 0;
async function * fn() {
  for await ({ w, a: x } of [{ a: 4 }]) {
    assert.sameValue(x, 4);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);