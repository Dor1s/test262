var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var f;
f = ([] = iter) => {
  assert.sameValue(iterations, 0);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');