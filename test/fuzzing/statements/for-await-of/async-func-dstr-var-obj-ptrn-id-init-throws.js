function thrower() {
  throw new Test262Error();
}
async function fn() {
  for await (var { x = thrower() } of [{}]) {
    return;
  }
}
fn()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, Test262Error);
    
  })
  .then($DONE, $DONE);