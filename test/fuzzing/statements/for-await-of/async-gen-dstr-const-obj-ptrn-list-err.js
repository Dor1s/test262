var initCount = 0;
function thrower() {
  throw new Test262Error();
}
async function * gen() {
  for await (const { a, b = thrower(), c = ++initCount } of [{}]) {
    return;
  }
}
gen().next()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, Test262Error);
    
  })
  .then($DONE, $DONE);