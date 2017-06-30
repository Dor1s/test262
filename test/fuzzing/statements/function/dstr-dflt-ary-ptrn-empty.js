var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
function f([] = iter) {
  assert.sameValue(iterations, 0);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');