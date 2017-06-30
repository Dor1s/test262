var callCount = 0;
var f;
f = function*([, , ...x]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  callCount = callCount + 1;
};
f([1, 2]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');