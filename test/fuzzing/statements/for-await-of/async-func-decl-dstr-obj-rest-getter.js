let x;
let count = 0;
let iterCount = 0;
async function fn() {
  for await ({...x} of [{ get v() { count++; return 2; } }]) {
    assert.sameValue(x.v, 2);
    assert.sameValue(count, 1);
    verifyEnumerable(x, "v");
    verifyWritable(x, "v");
    verifyConfigurable(x, "v");
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);