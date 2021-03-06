var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var f;
f = function([...[]]) {
  assert.sameValue(iterations, 1);
  callCount = callCount + 1;
};
f(iter);
assert.sameValue(callCount, 1, 'function invoked exactly once');