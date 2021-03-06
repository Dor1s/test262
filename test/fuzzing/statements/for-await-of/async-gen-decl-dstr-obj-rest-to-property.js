let src = {};
let iterCount = 0;
async function * fn() {
  for await ({...src.y} of [{ x: 1, y: 2}]) {
    assert.sameValue(src.y.x, 1);
    assert.sameValue(src.y.y, 2);
    verifyEnumerable(src, "y");
    verifyWritable(src, "y");
    verifyConfigurable(src, "y");
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);