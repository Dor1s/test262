var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
class C {
  static *method([...[]]) {
    assert.sameValue(iterations, 1);
    callCount = callCount + 1;
  }
};
C.method(iter).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');