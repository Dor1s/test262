var iter = function*() {}();
iter.next();
var callCount = 0;
var f;
f = function*([,] = iter) {
  
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');