var callCount = 0;
var f;
f = function({ fn = function () {}, xFn = function x() {} }) {
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  callCount = callCount + 1;
};
f({});
assert.sameValue(callCount, 1, 'function invoked exactly once');