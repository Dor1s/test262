throw "Test262: This statement should not be evaluated.";
var callCount = 0;
async function* f([...[x], y] = [1, 2, 3]) {
  
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);