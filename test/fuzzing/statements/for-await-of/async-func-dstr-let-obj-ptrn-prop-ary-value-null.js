async function fn() {
  for await (let { w: [x, y, z] = [4, 5, 6] } of [{ w: null }]) {
    return;
  }
}
fn()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, TypeError);
    
  })
  .then($DONE, $DONE);