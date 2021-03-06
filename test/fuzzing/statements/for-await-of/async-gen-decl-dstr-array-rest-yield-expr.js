let x = {};
let iterCount = 0;
async function * fn() {
  for await ([...x[yield]] of [[33, 44, 55]]) {
    
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
    assert.sameValue(x.prop.length, 3);
    assert.sameValue(x.prop[0], 33);
    assert.sameValue(x.prop[1], 44);
    assert.sameValue(x.prop[2], 55);
    assert.sameValue(iterCount, 1);
  }).then($DONE, $DONE);
});