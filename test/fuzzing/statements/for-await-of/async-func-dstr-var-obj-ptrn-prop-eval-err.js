function thrower() {
  throw new Test262Error();
}
async function fn() {
  for await (var { [thrower()]: x } of [{}]) {
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