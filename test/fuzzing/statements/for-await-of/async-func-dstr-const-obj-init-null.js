async function fn() {
  for await (const {} of [null]) {
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