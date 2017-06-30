var iter = function*() {}();
iter.next();
var callCount = 0;
function f([,]) {
  
  callCount = callCount + 1;
};
f(iter);
assert.sameValue(callCount, 1, 'function invoked exactly once');