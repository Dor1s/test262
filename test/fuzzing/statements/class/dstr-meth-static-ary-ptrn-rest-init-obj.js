throw "Test262: This statement should not be evaluated.";
var callCount = 0;
class C {
  static method([...{ x } = []]) {
    
    callCount = callCount + 1;
  }
};
C.method([]);
assert.sameValue(callCount, 1, 'method invoked exactly once');