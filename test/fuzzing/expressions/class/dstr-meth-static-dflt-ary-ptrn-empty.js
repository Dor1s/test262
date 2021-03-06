var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var C = class {
  static method([] = iter) {
    assert.sameValue(iterations, 0);
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');