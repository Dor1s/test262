throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var f;
f = async function*([...{ x } = []]) {
  
  callCount = callCount + 1;
};
f([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);