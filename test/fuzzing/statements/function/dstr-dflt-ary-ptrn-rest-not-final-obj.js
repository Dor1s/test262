throw "Test262: This statement should not be evaluated.";
var callCount = 0;
function f([...{ x }, y] = [1, 2, 3]) {
  
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');