var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
function f([[,] = g()] = [[]]) {
  assert.sameValue(callCount, 0);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');