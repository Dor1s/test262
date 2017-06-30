var o = Object.create({ x: 1, y: 2 });
o.z = 3;
var iterCount = 0;
async function fn() {
  for await (let { x, ...{y , z} } of [o]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 3);
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);