var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
async function * gen() {
  for await (let [x] of [iter]) {
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