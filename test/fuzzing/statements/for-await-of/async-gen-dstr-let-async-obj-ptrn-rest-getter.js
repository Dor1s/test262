var count = 0;
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{ get v() { count++; return 2; } }];
})();
async function *fn() {
  for await (let {...x} of asyncIter) {
    assert.sameValue(x.v, 2);
    assert.sameValue(count, 1);
    verifyEnumerable(x, "v");
    verifyWritable(x, "v");
    verifyConfigurable(x, "v");
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);