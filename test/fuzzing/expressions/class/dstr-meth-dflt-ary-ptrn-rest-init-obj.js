throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var C = class {
  method([...{ x } = []] = []) {
    
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');