throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var f;
f = function*([...[x], y] = [1, 2, 3]) {
  
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');