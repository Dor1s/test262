var iter = function*() {}();
iter.next();
var callCount = 0;
var C = class {
  *method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');