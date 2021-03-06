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
async function * fn() {
  for await ({ a: x.y } of [{ a: 23 }]) {
    assert.sameValue(setValue, 23);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);