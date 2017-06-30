var iter = function*() {}();
iter.next();
var callCount = 0;
class C {
  method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');