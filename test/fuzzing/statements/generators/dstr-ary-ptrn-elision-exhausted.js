var iter = function*() {}();
iter.next();
var callCount = 0;
function* f([,]) {
  
  callCount = callCount + 1;
};
f(iter).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');