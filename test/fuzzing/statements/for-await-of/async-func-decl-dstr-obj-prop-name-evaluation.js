let x, y, xy;
let iterCount = 0;
async function fn() {
  for await ({ ['x' + 'y']: x } of [{ x: 1, xy: 23, y: 2 }]) {
    assert.sameValue(x, 23);
    assert.sameValue(y, undefined);
    assert.sameValue(xy, undefined);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);