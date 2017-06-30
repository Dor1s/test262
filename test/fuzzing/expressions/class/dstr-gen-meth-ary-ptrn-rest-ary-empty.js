var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var C = class {
  *method([...[]]) {
    assert.sameValue(iterations, 1);
    callCount = callCount + 1;
  }
};
new C().method(iter).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');