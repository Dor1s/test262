async function * gen() {
  for await (var [x = (function() { throw new Test262Error(); })()] of [[undefined]]) {
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