var callCount = 0;
var f;
f = ([fn = function () {}, xFn = function x() {}] = []) => {
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');