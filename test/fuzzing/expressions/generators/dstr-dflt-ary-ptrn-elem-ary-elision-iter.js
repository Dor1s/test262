var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var f;
f = function*([[,] = g()] = [[]]) {
  assert.sameValue(callCount, 0);
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');