let x = 0;
let a, b;
let iterCount = 0;
async function fn() {
  for await ({ a = x += 1, b = x *= 2 } of [{}]) {
    assert.sameValue(a, 1);
    assert.sameValue(b, 2);
    assert.sameValue(x, 2);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);