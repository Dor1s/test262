var iter = function*() {}();
iter.next();
var callCount = 0;
var obj = {
  *method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');