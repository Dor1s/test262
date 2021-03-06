let x = undefined;
let iterCount = 0;
async function * fn() {
  for await ({ x: { x = yield } } of [{ x: {} }]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, false);
  assert.sameValue(x, undefined);
  iter.next(4).then(result => {
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);
    assert.sameValue(x, 4);
  }).then($DONE, $DONE);
});