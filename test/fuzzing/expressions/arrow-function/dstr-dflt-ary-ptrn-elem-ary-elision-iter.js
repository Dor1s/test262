var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var f;
f = ([[,] = g()] = [[]]) => {
  assert.sameValue(callCount, 0);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');