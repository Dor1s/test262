var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function() {
    accessCount += 1;
  }
});
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [obj];
})();
async function fn() {
  for await (let {} of asyncIter) {
    assert.sameValue(accessCount, 0);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);