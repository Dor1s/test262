var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var callCount = 0;
var f;
f = ([[,] = g()]) => {
  assert.sameValue(first, 1);
  assert.sameValue(second, 0);
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');