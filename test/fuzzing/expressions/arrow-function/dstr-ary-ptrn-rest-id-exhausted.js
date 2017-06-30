var callCount = 0;
var f;
f = ([, , ...x]) => {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  callCount = callCount + 1;
};
f([1, 2]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');