let prop;
let iterCount = 0;
async function * fn() {
  for await ({ x: prop = 'x' in {} } of [{}]) {
    assert.sameValue(prop, false);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);