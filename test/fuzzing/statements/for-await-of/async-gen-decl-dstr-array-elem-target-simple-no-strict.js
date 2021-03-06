let argument, eval;
let iterCount = 0;
async function * fn() {
  for await ([arguments, eval] of [[2, 3]]) {
    assert.sameValue(arguments, 2);
    assert.sameValue(eval, 3);
    iterCount += 1;
  }
}
let iter = fn();
iter.next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);