var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
function* f([...[]]) {
  assert.sameValue(iterations, 1);
  callCount = callCount + 1;
};
f(iter).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');