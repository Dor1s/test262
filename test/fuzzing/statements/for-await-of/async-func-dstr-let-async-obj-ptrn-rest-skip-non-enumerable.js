var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });
var iterCount = 0;
var asyncIter = (async function*() {
  yield* [o];
})();
async function fn() {
  for await (let {...rest} of asyncIter) {
    assert.sameValue(rest.a, 3);
    assert.sameValue(rest.b, 4);
    assert.sameValue(rest.x, undefined);
    verifyEnumerable(rest, "a");
    verifyWritable(rest, "a");
    verifyConfigurable(rest, "a");
    verifyEnumerable(rest, "b");
    verifyWritable(rest, "b");
    verifyConfigurable(rest, "b");
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);