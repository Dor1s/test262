throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var obj = {
  method([...{ x }, y]) {
    
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]);
assert.sameValue(callCount, 1, 'method invoked exactly once');