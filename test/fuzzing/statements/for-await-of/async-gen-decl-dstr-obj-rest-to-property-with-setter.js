let settedValue;
let executedGetter = false;
let src = {
  get y() {
    executedGetter = true;
  },
  set y(v) {
    settedValue = v;
  },
};
src.y = undefined;
let iterCount = 0;
async function * fn() {
  for await ({...src.y} of [{ x: 1, y: 2}]) {
    assert.sameValue(settedValue.x, 1);
    assert.sameValue(settedValue.y, 2);
    assert(!executedGetter, "The property should not be accessed");
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);