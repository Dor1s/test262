var g = {};
g[Symbol.iterator] = function() {
  return {
    next() {
      throw new Test262Error();
    }
  };
};
async function * gen() {
  for await (var [x] of [g]) {
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