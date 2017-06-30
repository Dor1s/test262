var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var f;
f = function*([] = iter) {
  assert.sameValue(iterations, 0);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');