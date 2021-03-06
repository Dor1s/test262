var callCount = 0;
var C = class {
  *method([fn = function () {}, xFn = function x() {}]) {
    assert.sameValue(fn.name, 'fn');
    assert.notSameValue(xFn.name, 'xFn');
    callCount = callCount + 1;
  }
};
new C().method([]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');