var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{x: 1, y: 2, a: 5, b: 3}];
})();
async function fn() {
  for await (let {a, b, ...rest} of asyncIter) {
    assert.sameValue(rest.x, 1);
    assert.sameValue(rest.y, 2);
    assert.sameValue(rest.a, undefined);
    assert.sameValue(rest.b, undefined);
    verifyEnumerable(rest, "x");
    verifyWritable(rest, "x");
    verifyConfigurable(rest, "x");
    verifyEnumerable(rest, "y");
    verifyWritable(rest, "y");
    verifyConfigurable(rest, "y");
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);