var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{}];
})();
async function *fn() {
  for await (let { gen = function* () {}, xGen = function* x() {} } of asyncIter) {
    assert.sameValue(gen.name, 'gen');
    assert.notSameValue(xGen.name, 'xGen');
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);