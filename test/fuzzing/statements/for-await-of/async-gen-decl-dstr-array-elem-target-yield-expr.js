let value = [33];
let x = {};
let iterationResult;
let iterCount = 0;
async function * fn() {
  for await ([ x[yield] ] of [[33]
]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(iterationResult => {
  assert.sameValue(iterationResult.value, undefined);
  assert.sameValue(iterationResult.done, false);
  assert.sameValue(x.prop, undefined);
  iter.next('prop').then(iterationResult => {
    assert.sameValue(iterationResult.value, undefined);
    assert.sameValue(iterationResult.done, true);
    assert.sameValue(x.prop, 33);
  }).then($DONE, $DONE);
});