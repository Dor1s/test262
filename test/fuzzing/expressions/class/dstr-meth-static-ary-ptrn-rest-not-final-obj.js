throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var C = class {
  static method([...{ x }, y]) {
    
    callCount = callCount + 1;
  }
};
C.method([1, 2, 3]);
assert.sameValue(callCount, 1, 'method invoked exactly once');