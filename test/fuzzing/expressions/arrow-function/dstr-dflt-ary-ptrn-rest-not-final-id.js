throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var f;
f = ([...x, y] = [1, 2, 3]) => {
  
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');