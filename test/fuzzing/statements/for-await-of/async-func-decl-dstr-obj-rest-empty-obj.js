let rest;
let iterCount = 0;
async function fn() {
  for await ({...rest} of [{}]) {
    assert.notSameValue(rest, undefined);
    assert.notSameValue(rest, null);
    assert.sameValue(typeof rest, "object");
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);