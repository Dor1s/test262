var iter = function*() {}();
iter.next();
var callCount = 0;
var C = class {
  static method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');