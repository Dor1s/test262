var iter = function*() {}();
iter.next();
var callCount = 0;
var f;
f = function([,] = iter) {
  
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');