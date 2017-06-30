var callCount = 0;
function f(x = arguments[2], y = arguments[3], z) {
  assert.sameValue(x, 'third', 'first parameter');
  assert.sameValue(y, 'fourth', 'second parameter');
  assert.sameValue(z, 'third', 'third parameter');
  callCount = callCount + 1;
}
f(undefined, undefined, 'third', 'fourth');
assert.sameValue(callCount, 1, 'function invoked exactly once');