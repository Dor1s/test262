var iterCount = 0;
async function *fn() {
  for await (let { x: [y], } of [{ x: [45] }]) {
    assert.sameValue(y,45);
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);