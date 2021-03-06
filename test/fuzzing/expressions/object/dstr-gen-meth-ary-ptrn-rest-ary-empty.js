var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var obj = {
  *method([...[]]) {
    assert.sameValue(iterations, 1);
    callCount = callCount + 1;
  }
};
obj.method(iter).next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');