let x;
let iterCount = 0;
async function fn() {
  for await ([...{ 1: x }] of [[1, 2, 3]]) {
    assert.sameValue(x, 2);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);