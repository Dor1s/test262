var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function() {
    throw new Test262Error();
  }
});
async function fn() {
  for await (let { poisoned: x = ++initEvalCount } of [poisonedProperty]) {
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