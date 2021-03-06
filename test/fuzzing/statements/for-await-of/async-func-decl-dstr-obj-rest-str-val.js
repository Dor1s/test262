let rest;
let iterCount = 0;
async function fn() {
  for await ({...rest} of ["foo"]) {
    assert.sameValue(rest["0"], "f");
    assert.sameValue(rest["1"], "o");
    assert.sameValue(rest["2"], "o");
    assert(rest instanceof Object);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);