throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var obj = {
  method([...{ x } = []] = []) {
    
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');