let yield = 4;
let x;
let iterCount = 0;
async function fn() {
  for await ([ x = yield ] of [[]]) {
    assert.sameValue(x, 4);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);