var callCount = 0;
function* f([fn = function () {}, xFn = function x() {}]) {
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  callCount = callCount + 1;
};
f([]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');