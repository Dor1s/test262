let prop;
let iterCount = 0;
async function fn() {
  for await ({ prop = 'x' in {} } of [{}]) {
    assert.sameValue(prop, false);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);