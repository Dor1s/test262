let o = Object.create({ x: 1, y: 2 });
o.z = 3;
let x, y, z;
let iterCount = 0;
async function * fn() {
  for await ({ x, ...{y , z} } of [o]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 3);
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);