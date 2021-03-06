var o = Object.create({ x: 1, y: 2 });
o.z = 3;
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [o];
})();
async function *fn() {
  for await (var { x, ...{y , z} } of asyncIter) {
    assert.sameValue(x, 1);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 3);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);