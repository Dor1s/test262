let arrow;
let iterCount = 0;
async function fn() {
  for await ({ x: arrow = () => {} } of [{}]) {
    assert.sameValue(arrow.name, 'arrow');
    verifyNotEnumerable(arrow, 'name');
    verifyNotWritable(arrow, 'name');
    verifyConfigurable(arrow, 'name');
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);