throw "Test262: This statement should not be evaluated.";
var callCount = 0;
class C {
  *method([...x = []]) {
    
    callCount = callCount + 1;
  }
};
new C().method([]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');