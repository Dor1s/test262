let v2, vNull, vHole, vUndefined, vOob;
let iterCount = 0;
async function fn() {
  for await ([v2 = 10, vNull = 11, vHole = 12, vUndefined = 13, vOob = 14] of [[2, null, , undefined]]) {
    assert.sameValue(v2, 2);
    assert.sameValue(vNull, null);
    assert.sameValue(vHole, 12);
    assert.sameValue(vUndefined, 13);
    assert.sameValue(vOob, 14);
    iterCount += 1;
  }
}
let promise = fn();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);