var iter = function*() {}();
iter.next();
var callCount = 0;
var f;
f = ([,] = iter) => {
  
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');