async function fn() {
  for await (let { x: y = unresolvableReference } of [{}]) {
    return;
  }
}
fn()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, ReferenceError);
    
  })
  .then($DONE, $DONE);