var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var obj = {
  method([]) {
    assert.sameValue(iterations, 0);
    callCount = callCount + 1;
  }
};
obj.method(iter);
assert.sameValue(callCount, 1, 'method invoked exactly once');