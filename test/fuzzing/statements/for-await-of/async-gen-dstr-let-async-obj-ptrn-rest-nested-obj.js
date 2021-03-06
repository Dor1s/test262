var obj = {a: 3, b: 4};
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{a: 1, b: 2, c: 3, d: 4, e: 5}];
})();
async function *fn() {
  for await (let {a, b, ...{c, e}} of asyncIter) {
    assert.sameValue(a, 1);
    assert.sameValue(b, 2);
    assert.sameValue(c, 3);
    assert.sameValue(e, 5);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);