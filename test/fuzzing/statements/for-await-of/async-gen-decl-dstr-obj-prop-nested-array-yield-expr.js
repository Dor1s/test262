let x;
let iterCount = 0;
async function * fn() {
  for await ({ x: [x = yield] } of [{ x: [] }]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, false);
  assert.sameValue(x, undefined);
  iter.next(24601).then(result => {
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);
    assert.sameValue(x, 24601);
  }).then($DONE, $DONE);
});