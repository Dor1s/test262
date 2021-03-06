let x;
let iterCount = 0;
async function * fn() {
  for await ([...{ x = yield }] of [[{}]]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(iterationResult => {
  assert.sameValue(iterationResult.value, undefined);
  assert.sameValue(iterationResult.done, false);
  assert.sameValue(x, undefined);
  iter.next(4).then(iterationResult => {
    assert.sameValue(iterationResult.value, undefined);
    assert.sameValue(iterationResult.done, true);
    assert.sameValue(x, 4);
  }).then($DONE, $DONE);
});