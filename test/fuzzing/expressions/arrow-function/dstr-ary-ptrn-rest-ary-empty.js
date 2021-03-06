var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var callCount = 0;
var f;
f = ([...[]]) => {
  assert.sameValue(iterations, 1);
  callCount = callCount + 1;
};
f(iter);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');