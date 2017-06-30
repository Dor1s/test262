async function * gen() {
  for await (let { w: { x, y, z } = { x: 4, y: 5, z: 6 } } of [{ w: null }]) {
    return;
  }
}
gen().next()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, TypeError);
    
  })
  .then($DONE, $DONE);