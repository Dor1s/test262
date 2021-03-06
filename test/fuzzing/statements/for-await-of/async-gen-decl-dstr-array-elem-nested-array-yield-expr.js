let value = [[22]];
let x = {};
let iterCount = 0;
async function * fn() {
  for await ([[x[yield]]] of [value]) {
    
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
    assert.sameValue(x.prop, 22);
  }, $DONE).then($DONE, $DONE);
}, $DONE).catch($DONE);