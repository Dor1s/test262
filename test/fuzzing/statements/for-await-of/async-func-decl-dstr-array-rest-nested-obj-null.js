let x, length;
let iterCount = 0;
async function fn() {
  for await ([...{ 0: x, length }] of [[null]]) {
    assert.sameValue(x, null);
    assert.sameValue(length, 1);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);