let yield = 'prop';
let x = {};
let iterCount = 0;
async function fn() {
  for await ([...x[yield]] of [[33, 44, 55]]) {
    assert.sameValue(x.prop.length, 3);
    assert.sameValue(x.prop[0], 33);
    assert.sameValue(x.prop[1], 44);
    assert.sameValue(x.prop[2], 55);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);