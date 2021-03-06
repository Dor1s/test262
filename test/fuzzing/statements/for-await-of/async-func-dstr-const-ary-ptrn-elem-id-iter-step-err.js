var g = {};
g[Symbol.iterator] = function() {
  return {
    next() {
      throw new Test262Error();
    }
  };
};
async function fn() {
  for await (const [x] of [g]) {
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