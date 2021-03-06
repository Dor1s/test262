let count = 0;
let g = function*() {
  count += 1;
  yield;
  count += 1;
  yield;
  count += 1;
}
let x;
let iterCount = 0;
async function * fn() {
  for await ([...x] of [g()]) {
    assert.sameValue(count, 3);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);