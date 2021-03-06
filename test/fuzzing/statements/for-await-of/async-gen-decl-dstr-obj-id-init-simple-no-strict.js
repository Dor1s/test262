let eval, arguments;
let iterCount = 0;
async function * fn() {
  for await ({ eval = 3, arguments = 4 } of [{}]) {
    assert.sameValue(eval, 3);
    assert.sameValue(arguments, 4);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);