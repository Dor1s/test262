let o = {
  x: 42,
  y: 39,
  z: 'cheeseburger'
};
let x, y, z;
let iterCount = 0;
async function fn() {
  for await ({ x, ...z } of [o]) {
    assert.sameValue(x, 42);
    assert.sameValue(y, undefined);
    assert.sameValue(z.y, 39);
    assert.sameValue(z.z, 'cheeseburger');
    let keys = Object.keys(z);
    assert.sameValue(keys.length, 2);
    assert.sameValue(keys[0], 'y');
    assert.sameValue(keys[1], 'z');
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);