throw "Test262: This statement should not be evaluated.";
var callCount = 0;
async function* f([...x = []] = []) {
  
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);