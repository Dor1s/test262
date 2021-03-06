var following = 0;
var iter = function* () {
  throw new Test262Error();
  following += 1;
}();
async function * gen() {
  for await (var [,] of [iter]) {
    return;
  }
}
gen().next()
  .then(_ => {
    throw new Test262Error("Expected async function to reject, but resolved.");
  }, ({ constructor }) => {
    assert.sameValue(constructor, Test262Error);
    assert.sameValue(following, 0, "iterator is properly closed");
  })
  .then($DONE, $DONE);