throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var obj = {
  *method([...x, y] = [1, 2, 3]) {
    
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');