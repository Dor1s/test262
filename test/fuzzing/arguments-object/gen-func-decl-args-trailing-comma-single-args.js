var callCount = 0;
function* ref() {
  assert.sameValue(arguments.length, 1);
  assert.sameValue(arguments[0], 42);
  callCount = callCount + 1;
}
ref(42,).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');