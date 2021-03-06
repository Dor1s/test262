let x;
let iterCount = 0;
async function * fn() {
  for await ({ x: x = yield } of [{}]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, false);
  assert.sameValue(x, undefined);
  iter.next(86).then(result => {
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);
    assert.sameValue(x, 86);
  }).then($DONE, $DONE);
});