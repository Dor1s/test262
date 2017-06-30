var iter = function*() {}();
iter.next();
var callCount = 0;
var obj = {
  method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');