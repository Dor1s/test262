throw "Test262: This statement should not be evaluated.";
var callCount = 0;
function* f([...[x], y]) {
  
  callCount = callCount + 1;
};
f([1, 2, 3]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');