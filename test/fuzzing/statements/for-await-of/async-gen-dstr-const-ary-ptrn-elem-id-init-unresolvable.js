async function * gen() {
  for await (const [ x = unresolvableReference ] of [[]]) {
    return;
  }
}
gen().next()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, ReferenceError);
    
  })
  .then($DONE, $DONE);