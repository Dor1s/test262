async function * gen() {
  for await (var {} of [undefined]) {
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