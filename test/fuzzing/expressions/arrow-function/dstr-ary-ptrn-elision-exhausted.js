var iter = function*() {}();
iter.next();
var callCount = 0;
var f;
f = ([,]) => {
  
  callCount = callCount + 1;
};
f(iter);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');