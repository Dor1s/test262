let rest;
let iterCount = 0;
async function fn() {
  for await ({...rest} of [51]) {
    assert.notSameValue(rest, undefined);
    assert.notSameValue(rest, null);
    assert(rest instanceof Object);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);