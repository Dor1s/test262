var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
class C {
  method([] = iter) {
    assert.sameValue(iterations, 0);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');