var callCount = 0;
function f([, , ...x] = [1, 2]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');