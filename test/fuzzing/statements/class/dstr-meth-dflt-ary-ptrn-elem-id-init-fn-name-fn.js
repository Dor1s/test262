var callCount = 0;
class C {
  method([fn = function () {}, xFn = function x() {}] = []) {
    assert.sameValue(fn.name, 'fn');
    assert.notSameValue(xFn.name, 'xFn');
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');