throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var f;
f = function([...{ x } = []]) {
  
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'function invoked exactly once');