let setValue;
let x = {
  get y() {
    $ERROR('The property should not be accessed.');
  },
  set y(val) {
    setValue = val;
  }
};
let iterCount = 0;
async function fn() {
  for await ([...x.y] of [[23, 45, 99]]) {
    assert.sameValue(setValue.length, 3);
    assert.sameValue(setValue[0], 23);
    assert.sameValue(setValue[1], 45);
    assert.sameValue(setValue[2], 99);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);