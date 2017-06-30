var iter = function*() {}();
iter.next();
var callCount = 0;
class C {
  static *method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');