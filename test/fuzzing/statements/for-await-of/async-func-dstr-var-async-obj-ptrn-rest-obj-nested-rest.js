var iterCount = 0;
var asyncIter = (async function*() {
  yield* [{a: 1, b: 2, c: 3, d: 4, e: 5}];
})();
async function fn() {
  for await (var {a, b, ...{c, ...rest}} of asyncIter) {
    assert.sameValue(a, 1);
    assert.sameValue(b, 2);
    assert.sameValue(c, 3);
    assert.sameValue(rest.d, 4);
    assert.sameValue(rest.e, 5);
    verifyEnumerable(rest, "d");
    verifyWritable(rest, "d");
    verifyConfigurable(rest, "d");
    verifyEnumerable(rest, "e");
    verifyWritable(rest, "e");
    verifyConfigurable(rest, "e");
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);