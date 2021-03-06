let x = {};
let iterCount = 0;
async function * fn() {
  for await ({ x: x[yield] } of [{ x: 23 }]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, false);
  assert.sameValue(x.prop, undefined);
  iter.next('prop').then(result => {
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);
    assert.sameValue(x.prop, 23);
  }).then($DONE, $DONE);
});